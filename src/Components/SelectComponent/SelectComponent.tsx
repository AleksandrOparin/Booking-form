import React, { useEffect, useState, forwardRef, ForwardedRef } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import './SelectComponent.css';

import SelectOptionComponent from '../SelectOptionComponent/SelectOptionComponent';

interface SelectComponentProps {
    data: string[];
    placeholder: string;
}

const SelectComponent: React.FC<SelectComponentProps> = forwardRef(
    ({ data, placeholder }, ref: ForwardedRef<HTMLDivElement>) => {
        const [values, setValues] = useState<string[]>([]);
        const [selected, setSelected] = useState<string>('');
        const [open, setOpen] = useState<boolean>(false);

        useEffect(() => {
            setValues(data);
        }, [data]);

        const handleToggle = () => {
            setOpen(!open);
        };

        const handleSelect = (value: string) => {
            setSelected(value);
            setOpen(false);
        };

        return (
            <div className="select" ref={ref}>
                <div className="select__text select__text_dark" onClick={handleToggle}>
                    {selected ? selected : placeholder}
                    {open ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
                </div>

                {open && (
                    <ul className="select__options">
                        {values?.map((value) => (
                            <SelectOptionComponent
                                key={value}
                                value={value}
                                selected={selected}
                                onSelect={handleSelect}
                                onOptionClick={handleToggle}
                            />
                        ))}
                    </ul>
                )}
            </div>
        );
    }
);

export default SelectComponent;
