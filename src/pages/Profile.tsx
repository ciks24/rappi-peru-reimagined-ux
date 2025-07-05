
import React from 'react';
import Header from '@/components/UI/Header';
import { User, MapPin, CreditCard, Bell, HelpCircle, Settings, LogOut } from 'lucide-react';

const Profile: React.FC = () => {
  const menuItems = [
    { icon: User, label: 'Información personal', href: '/profile/personal' },
    { icon: MapPin, label: 'Mis direcciones', href: '/profile/addresses' },
    { icon: CreditCard, label: 'Métodos de pago', href: '/profile/payment' },
    { icon: Bell, label: 'Notificaciones', href: '/profile/notifications' },
    { icon: HelpCircle, label: 'Ayuda y soporte', href: '/profile/help' },
    { icon: Settings, label: 'Configuración', href: '/profile/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Mi perfil" showBackButton={false} />
      
      <div className="p-4">
        {/* User Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-rappi-orange bg-opacity-20 rounded-full flex items-center justify-center">
                <User size={24} className="text-rappi-orange" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">Juan Pérez</h2>
                <p className="text-gray-600">juan.perez@gmail.com</p>
                <p className="text-sm text-gray-500 mt-1">+51 987 654 321</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="divide-y divide-gray-100">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors touch-target accessible-focus text-left"
                  aria-label={item.label}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon size={18} className="text-gray-600" />
                  </div>
                  <span className="flex-1 font-medium text-gray-900">{item.label}</span>
                  <div className="text-gray-400">
                    <ArrowRight size={18} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* App Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="p-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-rappi-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-rappi-orange font-bold text-lg">R</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Rappi Perú</h3>
              <p className="text-gray-600 text-sm mb-2">Versión 2.0.0</p>
              <p className="text-gray-500 text-xs">
                Rediseño centrado en el usuario con enfoque en accesibilidad
              </p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-center space-x-3 hover:bg-red-50 transition-colors touch-target accessible-focus">
          <LogOut size={20} className="text-red-500" />
          <span className="font-medium text-red-500">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

// Missing import
const ArrowRight: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default Profile;
