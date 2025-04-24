import React from 'react';

const FieldGroup = ({ 
  label,
  children,
  className = 'form-group',
  ...props 
}) => {
  return (
    <div className={className} {...props}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
};

export default FieldGroup;
