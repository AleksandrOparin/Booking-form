interface ListItem {
    value: string;
    label: string;
}

export default interface ListComponentProps {
    listClassName: string;
    itemClassName: string;
    selectedItem?: string | null;
    selectedClassName?: string;
    items: ListItem[];
    onItemClick: (value: string) => void;
}
