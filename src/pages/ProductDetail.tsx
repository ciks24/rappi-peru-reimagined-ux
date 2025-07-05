
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/UI/Header';
import { useApp } from '@/contexts/AppContext';
import { products } from '@/data/mockData';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Producto no encontrado
          </h2>
          <button
            onClick={() => navigate('/')}
            className="text-rappi-orange font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={product.name} />
      
      <div className="relative">
        <img
          src={product.image}
          alt={`Imagen de ${product.name}`}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <div className="flex items-start justify-between mb-3">
            <h1 className="text-xl font-semibold text-gray-900 flex-1">
              {product.name}
            </h1>
            <span className="text-2xl font-bold text-rappi-orange ml-4">
              S/ {product.price.toFixed(2)}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <div className="flex items-center mr-6">
              <span className="mr-1">⭐</span>
              <span>{product.rating}</span>
            </div>
            <div className="flex items-center mr-6">
              <span className="mr-1">🕐</span>
              <span>{product.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">🏪</span>
              <span>{product.restaurant}</span>
            </div>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <h3 className="font-medium text-gray-900 mb-3">Cantidad</h3>
          <div className="flex items-center">
            <button
              onClick={() => updateQuantity(quantity - 1)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 touch-target accessible-focus"
              aria-label="Disminuir cantidad"
            >
              -
            </button>
            <span className="mx-4 text-lg font-medium min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 touch-target accessible-focus"
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
        </div>

        {/* Special Instructions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <h3 className="font-medium text-gray-900 mb-3">Instrucciones especiales</h3>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="Ej: Sin cebolla, extra picante..."
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rappi-orange focus:border-transparent resize-none"
            rows={3}
            aria-label="Instrucciones especiales para el producto"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 p-4">
          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className={`
              w-full py-4 rounded-xl font-semibold text-lg touch-target accessible-focus
              transition-colors duration-200
              ${product.available
                ? 'bg-rappi-orange text-white hover:bg-orange-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
            aria-label={`Agregar ${quantity} ${product.name} al carrito por S/ ${(product.price * quantity).toFixed(2)}`}
          >
            {product.available 
              ? `Agregar al carrito • S/ ${(product.price * quantity).toFixed(2)}`
              : 'Producto no disponible'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
