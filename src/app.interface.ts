export interface ISelectOption {
    value: string;
    label: string;
}

export interface IBookingFormConfig {
    tower: string;
    floor: number;
    meetingRoom: number;

    date: string;
    comment: string;
}
