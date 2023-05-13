import React from 'react';
import { useForm } from 'react-hook-form';

import SelectComponent, { Option } from '../SelectComponent/SelectComponent';

const FormComponent: React.FC = () => {
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

    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <SelectComponent
                    {...register('towerName', { required: true })}
                    options={nameOptions}
                    value={watch('towerName') || ''}
                    placeholder={'Выберите башню'}
                    onChange={(value) => setValue('towerName', value)}
                />
                {errors.towerName && <span>This field is required.</span>}
            </div>
            <div>
                <SelectComponent
                    {...register('floor', { required: true })}
                    options={floorOptions}
                    value={watch('floor') || ''}
                    placeholder={'Выберите этаж'}
                    onChange={(value) => setValue('floor', value)}
                />
                {errors.floor && <span>This field is required.</span>}
            </div>
            <div>
                <SelectComponent
                    {...register('room', { required: true })}
                    options={roomOptions}
                    value={watch('room') || ''}
                    placeholder={'Выберите комнату'}
                    onChange={(value) => setValue('room', value)}
                />
                {errors.room && <span>This field is required.</span>}
            </div>
            <div>
                <input type="date" min={currentDate} {...register('date', { required: true })} />
                {errors.date && <span>This field is required.</span>}
            </div>
            <div>
                <SelectComponent
                    {...register('timeInterval', { required: true })}
                    options={timeOptions}
                    value={watch('timeInterval') || ''}
                    placeholder={'Выберите время'}
                    onChange={(value) => setValue('timeInterval', value)}
                />
                {errors.timeInterval && <span>This field is required.</span>}
            </div>
            <div>
                <textarea
                    {...register('comment')}
                    placeholder={'Комментарий'}
                />
            </div>
            <div>
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
        </form>
    );
};

export default FormComponent;
