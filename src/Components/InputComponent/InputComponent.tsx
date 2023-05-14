import React, { forwardRef, Ref } from 'react';

import InputComponentProps from './InputComponentProps';
import './InputComponent.css';

const InputComponent: React.FC<InputComponentProps> = forwardRef(
    (
        {
            register,
            type = 'text',
            className,
            placeholder,
            minValue,
            maxValue,
        },
        _ref: Ref<HTMLInputElement>
    ) => (
        <input
            {...register}
            type={type}
            className={`input ${className}`}
            placeholder={placeholder}
            min={minValue}
            max={maxValue}
        />
    )
);

export default InputComponent;
