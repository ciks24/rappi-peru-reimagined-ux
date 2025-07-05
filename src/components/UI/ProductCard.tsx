
import React from 'react';
import { Product } from '@/types';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleProductClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleProductClick();
        }
      }}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={`Imagen de ${product.name}`}
          className="w-full h-32 object-cover"
          loading="lazy"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium text-sm">No disponible</span>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-gray-900 text-sm leading-tight">
            {product.name}
          </h3>
          <span className="text-rappi-orange font-semibold text-sm ml-2">
            S/ {product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 text-xs mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-2">⭐ {product.rating}</span>
            <span>{product.deliveryTime}</span>
          </div>
          
          {product.available && (
            <button
              onClick={handleAddToCart}
              className="bg-rappi-orange text-white px-3 py-1.5 rounded-lg text-xs font-medium touch-target accessible-focus hover:bg-orange-600 transition-colors"
              aria-label={`Agregar ${product.name} al carrito`}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
