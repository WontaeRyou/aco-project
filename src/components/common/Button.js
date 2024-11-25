import React from 'react';
import PropTypes from 'prop-types';
import { LoadingSpinner } from './LoadingSpinner';

export const Button = ({ children, onClick, isLoading, className, ...props }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className={`bg-white text-black border-2 border-[#41558a] flex items-center justify-center shadow-md hover:bg-[#41558a] hover:text-white transition-all ${className}`}
    {...props}
  >
    {isLoading ? <LoadingSpinner /> : children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  className: PropTypes.string
};