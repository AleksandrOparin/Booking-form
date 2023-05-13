import React from 'react';

import InputComponentProps from './InputComponentProps';
import './InputComponent.css';

const InputComponent: React.FC<InputComponentProps> = (
    {
        name,
        register,
        required = false,
        type = 'text',
        className,
        placeholder,
        width,
        onClick,
        readonly = false,
        value
   }) => (
    <input
        type={type}
        {...register(name, { required })}
        className={`input ${className}`}
        placeholder={placeholder}
        style={{width: width}}
        onClick={onClick}
        readOnly={readonly}
        value={value}
    />
);

export default InputComponent;
