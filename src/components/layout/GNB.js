import React from 'react';
import PropTypes from 'prop-types';

export const GNB = () => (
  <nav className="w-full h-[60px] bg-[#41558a] fixed top-0 z-50 border-b-2 border-white/10">
    <div className="max-w-[1440px] h-full mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <a href="#" className="text-white/90 text-lg hover:text-white transition-colors">Home</a>
        <a href="#" className="text-white/90 text-lg hover:text-white transition-colors">About</a>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="w-[120px] h-[40px] flex items-center justify-center bg-[#41558a] rounded-lg shadow-md">
    <span className="text-white text-2xl font-bold">ACO</span>
  </div>
</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="text-white/90 text-lg hover:text-white transition-colors">Contact</a>
        <a href="#" className="text-white/90 text-lg hover:text-white transition-colors">Help</a>
      </div>
    </div>
  </nav>
);