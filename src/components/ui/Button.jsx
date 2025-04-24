import React from 'react';

const Button = ({ 
  children,
  type = 'button',
  className = '',
  variant = 'primary',
  ...props 
}) => {
  const buttonClass = `btn-${variant} ${className}`.trim();
  
  return (
    <button
      type={type}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
