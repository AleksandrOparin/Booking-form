import React from 'react';

import FormGroupComponentProps from './FormGroupComponentProps';
import './FormGroupComponent.css';

const FormGroupComponent: React.FC<FormGroupComponentProps> = ({ group, register, errors }) => {
    const groupError = errors[group.fields[0].name as any];

    return (
        <div className="form__group">
            <div className="form-group__fields">
                {group.fields.map((field) => {
                    const { name, component: Component, type, width, options, placeholder, required } = field;

                    return (
                        <Component
                            name={name}
                            data={options}
                            type={type}
                            width={width}
                            register={register}
                            className="form__input-field"
                            placeholder={placeholder}
                            required={required}
                        />
                    );
                })}
            </div>
            <div className="form-group__error">
                {groupError && (
                    <span className="error-text">
                        {group.error}
                    </span>
                )}
            </div>
        </div>
    );
};

export default FormGroupComponent;
