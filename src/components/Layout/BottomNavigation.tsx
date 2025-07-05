
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useApp();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navigationItems = [
    {
      id: 'home',
      label: 'Inicio',
      icon: Home,
      path: '/',
      ariaLabel: 'Ir a página de inicio'
    },
    {
      id: 'search',
      label: 'Buscar',
      icon: Search,
      path: '/search',
      ariaLabel: 'Buscar productos'
    },
    {
      id: 'cart',
      label: 'Carrito',
      icon: ShoppingCart,
      path: '/cart',
      ariaLabel: `Carrito de compras, ${cartItemsCount} productos`,
      badge: cartItemsCount
    },
    {
      id: 'profile',
      label: 'Perfil',
      icon: User,
      path: '/profile',
      ariaLabel: 'Ver perfil de usuario'
    }
  ];

  return (
    <nav 
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 shadow-lg z-50"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="flex justify-around py-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`
                flex flex-col items-center py-2 px-3 touch-target accessible-focus
                transition-colors duration-200 rounded-lg
                ${isActive 
                  ? 'text-rappi-orange' 
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
              aria-label={item.ariaLabel}
              role="tab"
              aria-selected={isActive}
            >
              <div className="relative">
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                {item.badge && item.badge > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 bg-rappi-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                    aria-label={`${item.badge} productos en carrito`}
                  >
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-xs mt-1 font-medium ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
