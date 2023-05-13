import React from 'react';

import TextAreaComponentProps from './TextAreaComponentProps';
import './TextAreaComponent.css';

const TextAreaComponent: React.FC<TextAreaComponentProps> = (
    {
        name,
        register,
        required = false,
        className,
        placeholder
    }) => (
    <textarea
        {...register(name, { required })}
        className={`textarea ${className}`}
        placeholder={placeholder}
    />
);

export default TextAreaComponent;
