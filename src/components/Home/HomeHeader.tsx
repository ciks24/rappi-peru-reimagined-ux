
import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-rappi-orange px-4 pt-8 pb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white text-sm font-medium">¡Hola! 👋</p>
          <p className="text-white text-lg font-semibold">¿Qué vas a pedir hoy?</p>
        </div>
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">🇵🇪</span>
        </div>
      </div>
      
      <button
        onClick={() => navigate('/search')}
        className="w-full bg-white rounded-xl px-4 py-3 flex items-center touch-target accessible-focus hover:bg-gray-50 transition-colors"
        aria-label="Buscar productos y restaurantes"
      >
        <Search size={20} className="text-gray-400 mr-3" />
        <span className="text-gray-500 text-left">Buscar productos, restaurantes...</span>
      </button>
    </header>
  );
};

export default HomeHeader;
