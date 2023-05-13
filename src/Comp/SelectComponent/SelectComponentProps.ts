export interface Option {
    value: string;
    label: string;
}

export default interface SelectComponentProps {
    options: Option[];
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
}
