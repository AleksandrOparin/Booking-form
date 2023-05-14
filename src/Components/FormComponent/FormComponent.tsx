import React from 'react';
import { useForm } from 'react-hook-form';

import FormComponentProps, { getAllFieldNames, getRequiredFieldNames } from './FormComponentProps';
import './FormComponent.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const FormComponent: React.FC<FormComponentProps> = ({ title = '', className = '', groups }) => {
    const {
        handleSubmit,
        reset,
        register,
        watch,
        trigger,
        setValue,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: Record<string, any>) => {
        console.log(JSON.stringify(data));
    };

    const handleReset = () => {
        getAllFieldNames(groups).forEach((name) => {
            reset({ [name]: '' });
        });
    };

    const handleSelectChange = async (name: string, value: string) => {
        setValue(name, value);
        await triggerValidation(name);
    };

    const triggerValidation = async (name: string) => {
        await trigger(name);
    };

    return (
        <form className={`form ${className}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
                <h1 className="form__title">{title}</h1>
            </div>

            <div className="form__content">
                {groups.map(({ fields, error }) => {
                    const errorFlag = getRequiredFieldNames(fields).some((name) =>
                        Object.prototype.hasOwnProperty.call(errors, name)
                    );

                    return (
                        <div className="form__group form-group">
                            <div className="form-group__fields">
                                {fields.map(({ type, required, component, props }) => {
                                    const Component = component;
                                    const { name } = props;

                                    if (type === 'select') {
                                        props.onChange = (value: string) => handleSelectChange(name, value);
                                        props.value = watch(name) || '';
                                    }

                                    return <Component register={register(name, { required: required })} {...props} />;
                                })}
                            </div>

                            <div className="form-group__error">{errorFlag && <span>{error}</span>}</div>
                        </div>
                    );
                })}
            </div>

            <div className="form__footer">
                <div className="form__buttons">
                    <ButtonComponent type="submit" text="Забронировать" />

                    <ButtonComponent type="reset" text="Очистить" onClick={handleReset} />
                </div>
            </div>
        </form>
    );
};

export default FormComponent;
