import React from 'react';
import { useForm } from 'react-hook-form';

import FormComponentProps from './FormComponentProps';
import './FormComponent.css';

import FormGroupComponent from '../FormGroupComponent/FormGroupComponent';

const FormComponent: React.FC<FormComponentProps> = ({ title, className, formData }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const handleClear = () => {
        reset({
            tower: '',
            floor: '',
            room: '',
            date: '',
            timeInterval: '',
            comment: '',
        });
    };

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">{title}</h1>

            {formData.groups.map((group) => (
                <FormGroupComponent group={group} register={register} errors={errors} />
            ))}

            <div className="form__group form__group--buttons">
                <button type="submit" className="form__button">
                    Забронировать
                </button>
                <button type="button" onClick={handleClear} className="form__button">
                    Очистить
                </button>
            </div>
        </form>
    );
};

export default FormComponent;
