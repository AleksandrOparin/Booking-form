import React, { forwardRef, Ref } from 'react';

import InputComponentProps from './InputComponentProps';
import './InputComponent.css';

const InputComponent: React.FC<InputComponentProps> = forwardRef(
    (
        {
            type = 'text',
            className,
            placeholder,
            minValue,
            maxValue,
        },
        ref: Ref<HTMLInputElement>
    ) => (
        <input
            ref={ref}
            type={type}
            className={`input ${className}`}
            placeholder={placeholder}
            min={minValue}
            max={maxValue}
        />
    )
);

export default InputComponent;
