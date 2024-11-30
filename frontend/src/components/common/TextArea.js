import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = ({ value, onChange, placeholder, className, ...props }) => (
  <textarea
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={`w-full resize-none focus:outline-none text-black ${className}`}
    {...props}
  />
);

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
};