export default interface ButtonComponentProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    text?: string;

    onClick?: () => void;
}
