import React, { useState } from 'react';

import './SelectComponent.css';

interface SelectComponentProps {
    id: string;
    options: string[];
    className: string;
    placeholder: string;
    onSelect: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = (
    {
         id,
         options,
         className,
         placeholder,
         onSelect,
     }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        const value = event.currentTarget.textContent;
        setSelectedOption(value);
        onSelect(value || ''); // Pass an empty string if value is null
    };

    return (
        <div id={id} className={`select ${className}`}>
            <div className="select__placeholder" onClick={handleOptionSelect}>
                {selectedOption || placeholder}
            </div>
            <div className="select__options">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`select__option ${selectedOption === option ? 'selected' : ''}`}
                        onClick={handleOptionSelect}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectComponent;
