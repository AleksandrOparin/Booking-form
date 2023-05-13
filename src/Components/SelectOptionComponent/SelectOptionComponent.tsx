import React from 'react';

import SelectOptionComponentProps from './SelectOptionComponentProps';
import './SelectOptionComponent.css';

const SelectOptionComponent: React.FC<SelectOptionComponentProps> = ({ value, selected, onSelect, onOptionClick }) => {
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
