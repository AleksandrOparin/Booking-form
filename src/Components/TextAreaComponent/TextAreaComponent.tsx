import React from 'react';

interface TextAreaComponentProps {
    id: string;
    name: string;
    className: string;
    placeholder: string;
    register: any;
}

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ id, name, className, placeholder, register }) => (
    <textarea id={id} {...register(name)} className={`textarea ${className}`} placeholder={placeholder} />
);

export default TextAreaComponent;
