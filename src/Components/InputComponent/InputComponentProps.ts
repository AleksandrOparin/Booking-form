export default interface InputComponentProps {
    name: string;
    register: any;
    required?: boolean;

    value?: string;

    width: number;

    type?: string;
    className: string;
    placeholder: string;

    readonly?: boolean;

    onClick: () => void;
}
