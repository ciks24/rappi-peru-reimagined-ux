
import React from 'react';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center p-4 rounded-xl transition-all duration-200
        ${category.color} hover:scale-105 focus:scale-105
        touch-target accessible-focus border-2 border-transparent
        hover:border-rappi-orange focus:border-rappi-orange
      `}
      aria-label={`Ver productos de ${category.name}`}
    >
      <div className="text-2xl mb-2" role="img" aria-label={category.name}>
        {category.icon}
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">
        {category.name}
      </span>
    </button>
  );
};

export default CategoryCard;
