import React, { useState, forwardRef } from 'react';

export interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

const SelectComponent: React.ForwardRefRenderFunction<any, SelectProps> = ({ options, value, onChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`custom-select ${isOpen ? 'open' : ''}`}>
            <div className="selected-value" onClick={handleToggle}>
                {options.find((option) => option.value === value)?.label || 'Select an option'}
            </div>
            {isOpen && (
                <ul className="options">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`option ${option.value === value ? 'selected' : ''}`}
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
