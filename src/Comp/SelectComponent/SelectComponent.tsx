import React, { useState, forwardRef } from 'react';

import './SelectComponent.css';

export interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}

const SelectComponent: React.ForwardRefRenderFunction<any, SelectProps> = ({ options, value, placeholder, onChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`select ${isOpen ? 'open' : ''}`} ref={ref}>
            <div className="selected__value" onClick={handleToggle}>
                {options.find((option) => option.value === value)?.label || placeholder}
            </div>
            {isOpen && (
                <ul className="select__options">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`select__option select-option ${option.value === value ? 'select-option_selected' : ''}`}
                            onClick={() => handleOptionSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default forwardRef(SelectComponent);
