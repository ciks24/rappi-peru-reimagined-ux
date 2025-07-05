
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import BottomNavigation from './BottomNavigation';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const location = useLocation();
  const hideNavigation = ['/product/', '/checkout', '/order-tracking'].some(path => 
    location.pathname.includes(path)
  );

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto relative">
      <main className={`${hideNavigation ? 'pb-0' : 'pb-20'}`}>
        {children}
      </main>
      {!hideNavigation && <BottomNavigation />}
    </div>
  );
};

export default MobileLayout;
