
import React from 'react';
import HomeHeader from '@/components/Home/HomeHeader';
import Categories from '@/components/Home/Categories';
import FeaturedRestaurants from '@/components/Home/FeaturedRestaurants';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />
      <Categories />
      <FeaturedRestaurants />
    </div>
  );
};

export default Home;
