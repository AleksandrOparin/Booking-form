import FormComponentProps from '../../Components/FormComponent/FormComponentProps';
import { Option } from '../../Components/SelectComponent/SelectComponentProps';

import SelectComponent from '../../Components/SelectComponent/SelectComponent';
import InputComponent from '../../Components/InputComponent/InputComponent';
import TextAreaComponent from '../../Components/TextareaComponent/TextareaComponent';

// Tower
const towerOptions: Option[] = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
];

// Floor
const floorOptions: Option[] = Array.from({ length: 25 }, (_, index) => ({
    value: `${index + 3}`,
    label: `${index + 3}`,
}));

// Room
const roomOptions: Option[] = Array.from({ length: 10 }, (_, index) => ({
    value: `${index + 1}`,
    label: `${index + 1}`,
}));

// Date
const currentDate = new Date();
const minDate = currentDate.toISOString().split('T')[0];
const maxDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

// Time interval
const timeOptions: Option[] = Array.from({ length: 25 }, (_, index) => ({
    value: `${index}`,
    label: `${index}:00 - ${(index + 1) % 24}:00`,
}));


// Data
export const BookingFormData: FormComponentProps = {
    title: 'Забронировать переговорную',
    className: 'booking-form',
    groups: [
        {
            fields: [
                {
                    type: 'select',
                    required: true,
                    component: SelectComponent,
                    props: {
                        name: 'towerName',
                        options: towerOptions,
                        placeholder: 'Выберите башню',
                    },
                },
                {
                    type: 'select',
                    required: true,
                    component: SelectComponent,
                    props: {
                        name: 'floor',
                        options: floorOptions,
                        placeholder: 'Выберите этаж',
                    },
                },
                {
                    type: 'select',
                    required: true,
                    component: SelectComponent,
                    props: {
                        name: 'room',
                        options: roomOptions,
                        placeholder: 'Выберите комнату',
                    },
                },
            ],
            error: 'Некорректные данные переговорной',
        },
        {
            fields: [
                {
                    type: 'input',
                    required: true,
                    component: InputComponent,
                    props: {
                        name: 'date',
                        type: 'date',
                        options: towerOptions,
                        placeholder: 'Выберите башню',
                        minValue: minDate,
                        maxValue: maxDate,
                        className: 'input_dark-theme',
                    },
                },
                {
                    type: 'select',
                    required: true,
                    component: SelectComponent,
                    props: {
                        name: 'timeInterval',
                        options: timeOptions,
                        placeholder: 'Выберите время',
                    },
                },
            ],
            error: 'Некорректное время',
        },
        {
            fields: [
                {
                    type: 'textarea',
                    required: false,
                    component: TextAreaComponent,
                    props: {
                        name: 'comment',
                        placeholder: 'Комментарий',
                        className: 'input input_dark-theme',
                    },
                }
            ]
        }
    ],
};
