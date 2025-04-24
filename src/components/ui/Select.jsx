import React from 'react';

const Select = ({ 
  options = [],
  className = 'form-control',
  placeholder,
  ...props 
}) => {
  return (
    <select className={className} {...props}>
      {placeholder && (
        <option value="">{placeholder}</option>
      )}
      {options.map(option => (
        <option
          key={option.value || option.id || option}
          value={option.value || option.id || option}
          disabled={option.available === false}
          className={option.available === false ? 'option-disabled' : 'option-available'}
        >
          {option.name || option.label || option}
          {option.available === false && ' (недоступно)'}
        </option>
      ))}
    </select>
  );
};

export default Select;
