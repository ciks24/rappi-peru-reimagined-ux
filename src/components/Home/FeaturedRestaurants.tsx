
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { restaurants } from '@/data/mockData';

const FeaturedRestaurants: React.FC = () => {
  const navigate = useNavigate();

  const handleRestaurantClick = (restaurantId: string) => {
    navigate(`/restaurant/${restaurantId}`);
  };

  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Restaurantes destacados
      </h2>
      <div className="space-y-4">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => handleRestaurantClick(restaurant.id)}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleRestaurantClick(restaurant.id);
              }
            }}
            aria-label={`Ver menú de ${restaurant.name}`}
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={`Logo de ${restaurant.name}`}
                className="w-full h-32 object-cover"
                loading="lazy"
              />
              {restaurant.promoted && (
                <div className="absolute top-2 left-2 bg-rappi-orange text-white px-2 py-1 rounded-lg text-xs font-medium">
                  Promocionado
                </div>
              )}
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 text-base">
                  {restaurant.name}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-1">⭐</span>
                  <span>{restaurant.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-2">{restaurant.category}</p>
              
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">🕐 {restaurant.deliveryTime}</span>
                <span>🚚 Delivery gratis</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
