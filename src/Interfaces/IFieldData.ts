import React from 'react';

interface IFieldData {
    name: string;
    component: React.FC<any>;
    type?: string;
    width?: number;
    options?: string[];
    placeholder: string;
    required?: boolean;
}

export default IFieldData;
