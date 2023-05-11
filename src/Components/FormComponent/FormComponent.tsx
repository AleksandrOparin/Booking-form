import React from 'react';
import { useForm } from 'react-hook-form';

import SelectComponent from '../SelectComponent/SelectComponent';
import InputComponent from '../InputComponent/InputComponent';
import TextAreaComponent from '../TextAreaComponent/TextAreaComponent';

import './FormComponent.css';

type FormData = {
    tower: string;
    floor: string;
    room: string;
    date: string;
    timeInterval: string;
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

    const meetingTimeOptions = [...Array(24)].map(
        (_, index) =>
            `${index > 9 ? index : '0' + index}:00 - ${
                index + 1 > 9 ? ((index + 1) % 24) : '0' + (index + 1)
            }:00`
    );

    const towerOptions = ['A', 'B'];
    const placeholderTower = 'Башня';
    const placeholderFloor = 'Номер этажа';
    const placeholderMeetingRoom = 'Номер переговорной';
    const placeholderDate = 'Выберите дату';
    const placeholderTime = 'Выберите время';
    const placeholderComment = 'Введите ваш комментарий';

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">{title}</h1>
            <div className="form__group">
                <SelectComponent
                    data={towerOptions}
                    placeholder={placeholderTower}
                    {...register('tower', { required: true })}
                />

                <SelectComponent
                    data={floorOptions}
                    placeholder={placeholderFloor}
                    {...register('floor', { required: true })}
                />

                <SelectComponent
                    data={meetingRoomOptions}
                    placeholder={placeholderMeetingRoom}
                    {...register('room', { required: true })}
                />
            </div>
            {(errors.tower || errors.floor || errors.room) && (
                <span className="form__error">Укажите башню, номер этажа и номер переговорной</span>
            )}

            <div className="form__group">
                <InputComponent
                    id="meetingDate"
                    name="meetingDate"
                    type="date"
                    register={register}
                    className="form__input-field"
                    placeholder={placeholderDate}
                    required
                />
                <SelectComponent
                    data={meetingTimeOptions}
                    placeholder={placeholderTime}
                    {...register('timeInterval', { required: true })}
                />
            </div>
            {errors.date && <span className="form__error">Укажите корректную дату и время</span>}
            <div className="form__group">
                <TextAreaComponent
                    id="comment"
                    name="comment"
                    register={register}
                    className="form__input-field"
                    placeholder={placeholderComment}
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
