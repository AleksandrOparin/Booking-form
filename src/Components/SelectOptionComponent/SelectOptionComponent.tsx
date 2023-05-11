import React from 'react';

import './SelectOptionComponent.css';

interface SelectOptionProps {
    value: string;
    selected: string;
    onSelect: (value: string) => void;
    onOptionClick: () => void;
}

const SelectOptionComponent: React.FC<SelectOptionProps> = ({ value, selected, onSelect, onOptionClick }) => {
    const handleClick = () => {
        if (value?.toLowerCase() !== selected.toLowerCase()) {
            onSelect(value);
            onOptionClick();
        }
    };

    return (
        <li
            className={`select__option select-option ${
                value?.toLowerCase() === selected.toLowerCase() ? "select-option_active" : ""
            }`}
            onClick={handleClick}
        >
            {value}
        </li>
    );
};

export default SelectOptionComponent;
