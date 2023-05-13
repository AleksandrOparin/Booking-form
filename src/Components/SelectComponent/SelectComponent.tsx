import React, { useEffect, useState, forwardRef, ForwardedRef } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import SelectComponentProps from './SelectComponentProps';
import './SelectComponent.css';

import SelectOptionComponent from '../SelectOptionComponent/SelectOptionComponent';
import InputComponent from '../InputComponent/InputComponent';

const SelectComponent: React.FC<SelectComponentProps> = forwardRef(
    ({ name, register, required = false, data, placeholder, width }, ref: ForwardedRef<HTMLDivElement>) => {
        const [values, setValues] = useState<string[]>([]);
        const [selected, setSelected] = useState<string>('');
        const [open, setOpen] = useState<boolean>(false);

        useEffect(() => {
            setValues(data);
        }, [data]);

        const handleToggle = (): void => {
            setOpen(!open);
        };

        const handleSelect = (value: string): void => {
            setSelected(value);
            setOpen(false);
        };

        return (
            <div className="select" ref={ref}>
                <InputComponent
                    name={name}
                    width={width}
                    register={register}
                    className="form__input-field"
                    placeholder={placeholder}
                    required={required}
                    onClick={handleToggle}
                    value={selected}
                    readonly={true}
                />

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
