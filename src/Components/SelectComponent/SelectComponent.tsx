import React from 'react';

import './SelectComponent.css';

interface SelectComponentProps {
    id: string;
    name: string;
    options: string[];
    register: any;
    className: string;
    placeholder: string;
    required?: boolean;
}

const SelectComponent: React.FC<SelectComponentProps> = (
    {
         id,
         name,
         options,
         register,
         className,
         placeholder,
         required = false,
     }) => (
    <select id={id} {...register(name, { required })} className={`select ${className}`} placeholder={placeholder}>
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
);

export default SelectComponent;
