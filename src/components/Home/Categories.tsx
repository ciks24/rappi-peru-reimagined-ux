
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '@/components/UI/CategoryCard';
import { categories } from '@/data/mockData';

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/search?category=${categoryId}`);
  };

  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Categorías
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
