import React from 'react';

const Input = ({ 
  type = 'text',
  placeholder,
  className = 'form-control',
  ...props 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}s
    />
  );
};

export default Input;
