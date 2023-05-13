import React from 'react';
import { useForm } from 'react-hook-form';

import FormComponentProps from './FormComponentProps';
import './FormComponent.css';

import { Option } from '../SelectComponent/SelectComponentProps';
import SelectComponent from '../SelectComponent/SelectComponent';
import InputComponent from '../InputComponent/InputComponent';

const FormComponent: React.FC<FormComponentProps> = ({ title = '', className = '' }) => {
    const {
        handleSubmit,
        reset,
        register,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        mode: 'onChange', // Enable onChange mode to trigger revalidation on input change
    });

    const nameOptions: Option[] = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
    ];

    const floorOptions: Option[] = Array.from({ length: 25 }, (_, index) => ({
        value: `${index + 3}`,
        label: `${index + 3}`,
    }));

    const roomOptions: Option[] = Array.from({ length: 10 }, (_, index) => ({
        value: `${index + 1}`,
        label: `${index + 1}`,
    }));

    const timeOptions: Option[] = Array.from({ length: 25 }, (_, index) => ({
        value: `${index}`,
        label: `${index}:00 - ${index + 1}:00`,
    }));

    const onSubmit = (data: Record<string, any>) => {
        console.log(JSON.stringify(data));
    };

    const handleReset = () => {
        reset();
    };

    const currentDate = new Date();
    const minDate = currentDate.toISOString().split('T')[0];
    const maxDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h1 className="form__title">{title}</h1>
            </div>

            <div className="form__content">
                <div className="form__group form-group">
                    <div className="form-group__fields">
                        <SelectComponent
                            {...register('towerName', { required: true })}
                            options={nameOptions}
                            value={watch('towerName') || ''}
                            placeholder={'Выберите башню'}
                            onChange={(value) => setValue('towerName', value)}
                        />

                        <SelectComponent
                            {...register('floor', { required: true })}
                            options={floorOptions}
                            value={watch('floor') || ''}
                            placeholder={'Выберите этаж'}
                            onChange={(value) => setValue('floor', value)}
                        />

                        <SelectComponent
                            {...register('room', { required: true })}
                            options={roomOptions}
                            value={watch('room') || ''}
                            placeholder={'Выберите комнату'}
                            onChange={(value) => setValue('room', value)}
                        />
                    </div>

                    <div className="form-group__error">
                        {errors.towerName && errors.floor && errors.room && <span>Некорректные данные переговорной</span>}
                    </div>
                </div>

                <div className="form__group">
                    <div className="form-group__fields">
                        <InputComponent
                            {...register('date', { required: true })}
                            type="date"
                            minValue={minDate}
                            maxValue={maxDate}
                            className="input_dark-theme"
                        />

                        <SelectComponent
                            {...register('timeInterval', { required: true })}
                            options={timeOptions}
                            value={watch('timeInterval') || ''}
                            placeholder={'Выберите время'}
                            onChange={(value) => setValue('timeInterval', value)}
                        />
                    </div>

                    <div className="form-group__error">
                        {errors.date && errors.timeInterval && <span>Некорректное время</span>}
                    </div>
                </div>

                <div className="form__group">
                    <div className="form-group__fields">
                        <textarea
                            {...register('comment')}
                            placeholder={'Комментарий'}
                        />
                    </div>

                    <div className="form-group__error">

                    </div>
                </div>
            </div>

            <div className="form__footer">
                <div className="form__buttons">
                    <button
                        type="submit"
                        disabled={!watch('towerName') || !watch('floor') || !watch('room') || !watch('date') || !watch('timeInterval')}
                    >
                        Submit
                    </button>
                    <button type="button" onClick={handleReset}>
                        Clear
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormComponent;
