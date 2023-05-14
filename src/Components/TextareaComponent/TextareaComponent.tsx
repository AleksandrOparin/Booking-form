import React, { forwardRef, Ref } from 'react';

import TextAreaComponentProps from './TextareaComponentProps';
import './TextAreaComponent.css';

const TextAreaComponent: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaComponentProps> =
    ({ register, className, placeholder }, _ref: Ref<HTMLTextAreaElement>) => (
    <textarea
        {...register}
        className={`textarea ${className}`}
        placeholder={placeholder}
    />
);

export default forwardRef<HTMLTextAreaElement, TextAreaComponentProps>(TextAreaComponent);
