export default interface SelectOptionComponentProps {
    value: string;
    selected: string;
    onSelect: (value: string) => void;
    onOptionClick: () => void;
}
