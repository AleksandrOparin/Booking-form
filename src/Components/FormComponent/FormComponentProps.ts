interface IComponentWithProps {
    type: 'select' | 'input' | 'textarea';
    required: boolean;
    component: any;
    props: any;
}

interface IGroupData {
    fields: IComponentWithProps[];
    error?: string;
}

export default interface FormComponentProps {
    title?: string;
    className?: string;
    groups: IGroupData[];
}

export const getAllFieldNames = (groups: IGroupData[]): string[] => {
    const fieldNames: string[] = [];

    groups.forEach((group: IGroupData) => {
        group.fields.forEach((field: IComponentWithProps) => {
            if (field.props && field.props.name) {
                fieldNames.push(field.props.name);
            }
        });
    });

    return fieldNames;
};

export const getRequiredFieldNames = (fields: IComponentWithProps[]): string[] => {
    return fields
        .filter(({ required }) => required)
        .map(({ props }) => props.name);
};
