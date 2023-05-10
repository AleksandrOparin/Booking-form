import React from 'react';

interface SelectComponentProps {
    id: string;
    name: string;
    options: string[];
    register: any;
    placeholder: string;
    required?: boolean;
}

const SelectComponent: React.FC<SelectComponentProps> = (
    {
         id,
         name,
         options,
         register,
         placeholder,
         required = false,
     }) => (
    <select id={id} {...register(name, { required })} className="form__select" placeholder={placeholder}>
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
);

export default SelectComponent;
