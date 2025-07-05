
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/UI/Header';
import { useApp } from '@/contexts/AppContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, createOrder } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const deliveryFee = 5.90;
  const serviceFee = 2.50;
  const total = getCartTotal() + deliveryFee + serviceFee;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    createOrder();
    navigate('/order-tracking');
  };

  const paymentMethods = [
    { id: 'card', name: 'Tarjeta de crédito/débito', icon: '💳' },
    { id: 'cash', name: 'Efectivo', icon: '💵' },
    { id: 'yape', name: 'Yape', icon: '📱' },
    { id: 'plin', name: 'Plin', icon: '💰' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Confirmar pedido" />
      
      <div className="p-4 pb-32">
        {/* Delivery Address */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Dirección de entrega</h2>
          </div>
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-rappi-orange bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-rappi-orange text-sm">📍</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Jr. de la Unión 1234</p>
                <p className="text-gray-600 text-sm">Lima Centro, Lima</p>
                <p className="text-gray-500 text-sm mt-1">Referencia: Frente al parque</p>
              </div>
              <button className="text-rappi-orange text-sm font-medium accessible-focus">
                Cambiar
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Método de pago</h2>
          </div>
          <div className="p-4 space-y-3">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className="flex items-center space-x-3 cursor-pointer touch-target accessible-focus"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="sr-only"
                />
                <div className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${paymentMethod === method.id 
                    ? 'border-rappi-orange bg-rappi-orange' 
                    : 'border-gray-300'
                  }
                `}>
                  {paymentMethod === method.id && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-lg mr-3">{method.icon}</span>
                <span className="font-medium text-gray-900">{method.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Tu pedido ({cart.length} productos)</h2>
          </div>
          <div className="p-4">
            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.quantity}x {item.name}</p>
                    <p className="text-sm text-gray-600">{item.restaurant}</p>
                  </div>
                  <span className="font-medium text-gray-900">
                    S/ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>S/ {getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Costo de delivery</span>
                <span>S/ {deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tarifa de servicio</span>
                <span>S/ {serviceFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-rappi-orange">S/ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Time */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">🕐</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Tiempo estimado</p>
                <p className="text-gray-600 text-sm">25-35 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-4">
        <button
          onClick={handlePlaceOrder}
          disabled={isProcessing}
          className={`
            w-full py-4 rounded-xl font-semibold text-lg touch-target accessible-focus
            transition-all duration-200
            ${isProcessing
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-rappi-orange text-white hover:bg-orange-600'
            }
          `}
          aria-label={`Confirmar pedido por S/ ${total.toFixed(2)}`}
        >
          {isProcessing ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              <span>Procesando pedido...</span>
            </div>
          ) : (
            `Confirmar pedido • S/ ${total.toFixed(2)}`
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
