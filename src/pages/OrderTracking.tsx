
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/UI/Header';
import { useApp } from '@/contexts/AppContext';

const OrderTracking: React.FC = () => {
  const navigate = useNavigate();
  const { currentOrder } = useApp();
  const [currentStatus, setCurrentStatus] = useState<string>('confirmed');

  const orderSteps = [
    { id: 'confirmed', title: 'Pedido confirmado', description: 'Hemos recibido tu pedido', icon: '✅', time: '0 min' },
    { id: 'preparing', title: 'Preparando pedido', description: 'El restaurante está preparando tu comida', icon: '👨‍🍳', time: '5 min' },
    { id: 'on-the-way', title: 'En camino', description: 'Tu pedido está en camino', icon: '🚚', time: '15 min' },
    { id: 'delivered', title: 'Entregado', description: '¡Tu pedido ha sido entregado!', icon: '🎉', time: '25 min' }
  ];

  useEffect(() => {
    if (!currentOrder) {
      navigate('/');
      return;
    }

    // Simulate order progress
    const statusSequence = ['confirmed', 'preparing', 'on-the-way', 'delivered'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < statusSequence.length - 1) {
        currentIndex++;
        setCurrentStatus(statusSequence[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, 8000); // Change status every 8 seconds

    return () => clearInterval(interval);
  }, [currentOrder, navigate]);

  if (!currentOrder) {
    return null;
  }

  const currentStepIndex = orderSteps.findIndex(step => step.id === currentStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        title="Seguimiento del pedido" 
        rightContent={
          <button
            onClick={() => navigate('/')}
            className="text-rappi-orange font-medium text-sm accessible-focus"
          >
            Ir al inicio
          </button>
        }
      />
      
      <div className="p-4">
        {/* Order Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-900">Pedido #{currentOrder.id}</h2>
              <span className="text-sm text-gray-500">
                {currentOrder.createdAt.toLocaleTimeString('es-PE', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Total: S/ {currentOrder.total.toFixed(2)} • {currentOrder.items.length} producto{currentOrder.items.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-rappi-orange bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-rappi-orange text-sm">📍</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Entregar en:</p>
                <p className="text-gray-600 text-sm">{currentOrder.deliveryAddress}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Estado del pedido</h3>
          </div>
          
          <div className="p-4">
            <div className="space-y-6">
              {orderSteps.map((step, index) => {
                const isCompleted = index <= currentStepIndex;
                const isCurrent = index === currentStepIndex;
                
                return (
                  <div key={step.id} className="flex items-start space-x-4">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center text-lg
                      ${isCompleted 
                        ? 'bg-rappi-orange text-white' 
                        : 'bg-gray-200 text-gray-400'
                      }
                      ${isCurrent ? 'animate-pulse' : ''}
                    `}>
                      {step.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-medium ${
                          isCompleted ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h4>
                        {isCompleted && (
                          <span className="text-xs text-gray-500">{step.time}</span>
                        )}
                      </div>
                      <p className={`text-sm ${
                        isCompleted ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                      {isCurrent && currentStatus !== 'delivered' && (
                        <div className="mt-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-rappi-orange rounded-full animate-bounce"></div>
                            <span className="text-xs text-rappi-orange font-medium">
                              En progreso...
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Estimated Time */}
        {currentStatus !== 'delivered' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">🕐</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Tiempo estimado</p>
                  <p className="text-gray-600 text-sm">
                    {currentStatus === 'confirmed' && 'Tu pedido estará listo en 25-35 min'}
                    {currentStatus === 'preparing' && 'Tu pedido estará listo en 15-25 min'}
                    {currentStatus === 'on-the-way' && 'Tu pedido llegará en 5-10 min'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Productos pedidos</h3>
          </div>
          
          <div className="divide-y divide-gray-100">
            {currentOrder.items.map((item) => (
              <div key={item.id} className="p-4 flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={`Imagen de ${item.name}`}
                  className="w-12 h-12 rounded-lg object-cover"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm">{item.quantity}x {item.name}</p>
                  <p className="text-gray-600 text-xs">{item.restaurant}</p>
                </div>
                <span className="font-medium text-gray-900 text-sm">
                  S/ {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Message */}
        {currentStatus === 'delivered' && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="font-semibold text-green-900 mb-1">
                ¡Pedido entregado con éxito!
              </h3>
              <p className="text-green-700 text-sm mb-4">
                Esperamos que disfrutes tu comida
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium touch-target accessible-focus hover:bg-green-700 transition-colors"
              >
                Hacer otro pedido
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
