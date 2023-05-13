import GroupDataType from '../../Interfaces/IGroupData';

export default interface FormGroupComponentProps {
    group: GroupDataType;
    register: any;
    errors: string;
}
