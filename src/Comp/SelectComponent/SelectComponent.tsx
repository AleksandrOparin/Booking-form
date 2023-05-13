import React, { useState, forwardRef } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import SelectComponentProps from './SelectComponentProps';
import './SelectComponent.css';
import ListComponent from '../ListComponent/ListComponent';

const SelectComponent: React.ForwardRefRenderFunction<HTMLDivElement, SelectComponentProps> = (
    { options, value, placeholder, onChange },
    ref
) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className="select input input_dark-theme" ref={ref}>
            <div className="select__text" onClick={handleToggle}>
                {value ? options.find((option) => option.value === value)?.label : placeholder}
                {isOpen ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
            </div>
            {isOpen && (
                <ListComponent
                    listClassName="select__options"
                    itemClassName="select__option select-option"
                    selectedClassName="select-option_selected"
                    selectedItem={value}
                    items={options}
                    onItemClick={(optionValue) => handleOptionSelect(optionValue)}
                />
            )}
        </div>
    );
};

export default forwardRef(SelectComponent);
