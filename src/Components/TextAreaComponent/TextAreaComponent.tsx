import React from 'react';

interface TextAreaComponentProps {
    id: string;
    name: string;
    placeholder: string;
    register: any;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ id, name, placeholder, register }) => (
    <textarea id={id} {...register(name)} className="form__textarea" placeholder={placeholder} />
);

export default TextAreaComponent;
