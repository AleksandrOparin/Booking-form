import React from 'react';

interface InputComponentProps {
    id: string;
    name: string;
    type?: string;
    className: string;
    placeholder: string;
    register: any;
    required?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = (
    {
        id,
        name,
        type = 'text',
        className,
        placeholder,
        register,
        required = false,
   }) => (
    <input
        type={type}
        id={id}
        {...register(name, { required })}
        className={`input ${className}`}
        placeholder={placeholder}
    />
);

export default InputComponent;
