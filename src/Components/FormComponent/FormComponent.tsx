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
        mode: 'onChange', // Enable validation on each input change
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const handleClear = () => {
        reset();
    };

    const floorOptions = [...Array(25)].map((_, index) => String(index + 3));
    const meetingRoomOptions = [...Array(10)].map((_, index) => String(index + 1));

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">{title}</h1>
            <div className="form__group">
                <SelectComponent
                    id="tower"
                    name="tower"
                    options={['A', 'B']}
                    register={register}
                    placeholder="Башня"
                    required
                />

                <SelectComponent
                    id="floor"
                    name="floor"
                    options={floorOptions}
                    register={register}
                    placeholder="Номер этажа"
                    required
                />

                <SelectComponent
                    id="meetingRoom"
                    name="meetingRoom"
                    options={meetingRoomOptions}
                    register={register}
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
                    placeholder="Выберите дату"
                    required
                />
            </div>
            {errors.date && <span className="form__error">Укажите дату</span>}

            <div className="form__group">
                <TextAreaComponent
                    id="comment"
                    name="comment"
                    register={register}
                    placeholder="Введите ваш комментарий"
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
