import React from 'react';
import { useForm } from 'react-hook-form';

import SelectComponent from '../SelectComponent/SelectComponent';
import InputComponent from '../InputComponent/InputComponent';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';

import './FormComponent.css';

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
        mode: 'onChange',
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const handleClear = () => {
        reset();
    };

    const floorOptions = [...Array(25)].map((_, index) => String(index + 3));
    const meetingRoomOptions = [...Array(10)].map((_, index) => String(index + 1));

    const meetingTimeOptions = [...Array(23)].map((_, index) => `${index > 9 ? index : '0' + index}:00 - ${index+1 > 9 ? index+1 : '0' + index}:00`);

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">{title}</h1>
            <div className="form__group">
                <SelectComponent
                    id="tower"
                    name="tower"
                    options={['A', 'B']}
                    register={register}
                    className="form__input-field"
                    placeholder="Башня"
                    required
                />

                <SelectComponent
                    id="floor"
                    name="floor"
                    options={floorOptions}
                    register={register}
                    className="form__input-field"
                    placeholder="Номер этажа"
                    required
                />

                <SelectComponent
                    id="meetingRoom"
                    name="meetingRoom"
                    options={meetingRoomOptions}
                    register={register}
                    className="form__input-field"
                    placeholder="Номер переговорной"
                    required
                />
            </div>
            {(errors.tower || errors.floor || errors.meetingRoom) && (
                <span className="form__error">Укажите башню, номер этажа и номер переговорной</span>
            )}

            <div className="form__group">
                <InputComponent
                    id="date"
                    name="date"
                    type="date"
                    register={register}
                    className="form__input-field"
                    placeholder="Выберите дату"
                    required
                />
            </div>
            {errors.date && <span className="form__error">Укажите дату</span>}

            <div className="form__group">
                <SelectComponent
                    id="meetingTime"
                    name="meetingTime"
                    options={meetingTimeOptions}
                    register={register}
                    className="form__input-field"
                    placeholder="Время"
                    required
                />
            </div>

            <div className="form__group">
                <TextAreaComponent
                    id="comment"
                    name="comment"
                    register={register}
                    className="form__input-field"
                    placeholder="Введите ваш комментарий"
                />
            </div>

            <div className="form__group form__group--buttons">
                <button type="submit" disabled={!isValid} className="form__button">
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
