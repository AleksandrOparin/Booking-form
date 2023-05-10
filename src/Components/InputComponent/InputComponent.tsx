import React from 'react';

interface InputComponentProps {
    id: string;
    name: string;
    type?: string;
    placeholder: string;
    register: any;
    required?: boolean;
}

const InputComponent: React.FC<InputComponentProps> = (
    {
       id,
       name,
       type = 'text',
       placeholder,
       register,
       required = false,
   }) => (
    <input
        type={type}
        id={id}
        {...register(name, { required })}
        className="form__input"
        placeholder={placeholder}
    />
);

export default InputComponent;
