import React from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';

import IFormConfig from '../../Interfaces/IFormConfig';

type FormData = {
    tower: string;
    floor: string;
    meetingRoom: string;
    date: string;
    comment: string;
};

interface FormComponentProps {
    title: string;
    className?: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ title, className }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'onChange', // Enable validation on each input change
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const handleClear = () => {
        reset();
    };

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">{title}</h1>
            <div className="form__group">
                <select id="tower" {...register('tower', { required: true })} className="form__select" placeholder="Башня">
                    <option value="">Башня</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>

                <select id="floor" {...register('floor', { required: true })} className="form__select" placeholder="Номер этажа">
                    <option value="">Этаж</option>
                    {[...Array(25)].map((_, index) => (
                        <option key={index} value={String(index + 3)}>
                            {index + 3}
                        </option>
                    ))}
                </select>

                <select
                    id="meetingRoom"
                    {...register('meetingRoom', { required: true })}
                    className="form__select"
                    placeholder="Номер переговорной"
                >
                    <option value="">Номер переговорной</option>
                    {[...Array(10)].map((_, index) => (
                        <option key={index} value={String(index + 1)}>
                            {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            {(errors.tower || errors.floor || errors.meetingRoom) && (
                <span className="form__error">Эти поля обязательны</span>
            )}

            <div className="form__group">
                <input
                    type="date"
                    id="date"
                    {...register('date', { required: true })}
                    className="form__input"
                    placeholder="Выберите дату"
                />
            </div>
            {errors.date && <span className="form__error">Укажите дату</span>}

            <div className="form__group">
        <textarea
            id="comment"
            {...register('comment')}
            className="form__textarea"
            placeholder="Enter your comment"
        />
            </div>

            <div className="form__group form__group--buttons">
                <button type="submit" disabled={!isValid} className="form__button">
                    Log Data
                </button>
                <button type="button" onClick={handleClear} className="form__button">
                    Clear
                </button>
            </div>
        </form>
    );
};

export default FormComponent;
