
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/UI/Header';
import { useApp } from '@/contexts/AppContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useApp();

  const deliveryFee = 5.90;
  const serviceFee = 2.50;
  const total = getCartTotal() + deliveryFee + serviceFee;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="Mi carrito" />
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Tu carrito está vacío
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Agrega productos para comenzar tu pedido
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-rappi-orange text-white px-6 py-3 rounded-xl font-medium touch-target accessible-focus hover:bg-orange-600 transition-colors"
            aria-label="Ir a explorar productos"
          >
            Explorar productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Mi carrito" />
      
      <div className="p-4 pb-32">
        {/* Cart Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Productos ({cart.length})</h2>
          </div>
          
          <div className="divide-y divide-gray-100">
            {cart.map((item) => (
              <div key={item.id} className="p-4">
                <div className="flex items-start space-x-3">
                  <img
                    src={item.image}
                    alt={`Imagen de ${item.name}`}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {item.restaurant}
                    </p>
                    <p className="font-medium text-rappi-orange">
                      S/ {item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:text-red-700 transition-colors accessible-focus"
                      aria-label={`Eliminar ${item.name} del carrito`}
                    >
                      Eliminar
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 touch-target accessible-focus"
                        aria-label="Disminuir cantidad"
                      >
                        -
                      </button>
                      <span className="min-w-[1.5rem] text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 touch-target accessible-focus"
                        aria-label="Aumentar cantidad"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Resumen del pedido</h2>
          </div>
          
          <div className="p-4 space-y-3">
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
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-rappi-orange">S/ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleCheckout}
          className="w-full bg-rappi-orange text-white py-4 rounded-xl font-semibold text-lg touch-target accessible-focus hover:bg-orange-600 transition-colors"
          aria-label={`Proceder al pago por S/ ${total.toFixed(2)}`}
        >
          Proceder al pago • S/ {total.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default Cart;
