import IFormData from '../../Interfaces/IFormData';

import SelectComponent from '../../Components/SelectComponent/SelectComponent';
import InputComponent from '../../Components/InputComponent/InputComponent';
import TextAreaComponent from '../../Components/TextAreaComponent/TextAreaComponent';

export const BookingFormData: IFormData = {
    groups: [
        {
            fields: [
                {
                    name: 'tower',
                    component: SelectComponent,
                    options: ['A', 'B'],
                    placeholder: 'Башня',
                    width: 100,
                    required: true,
                },
                {
                    name: 'floor',
                    component: SelectComponent,
                    options: [...Array(25)].map((_, index) => String(index + 3)),
                    placeholder: 'Номер этажа',
                    width: 120,
                    required: true,
                },
                {
                    name: 'room',
                    component: SelectComponent,
                    options: [...Array(10)].map((_, index) => String(index + 1)),
                    placeholder: 'Номер переговорной',
                    width: 180,
                    required: true,
                },
            ],
            error: 'Некорректные данные переговорной',
        },
        {
            fields: [
                {
                    name: 'date',
                    component: InputComponent,
                    type: 'date',
                    placeholder: 'Выберите дату',
                    required: true,
                },
                {
                    name: 'timeInterval',
                    component: SelectComponent,
                    options: [...Array(24)].map(
                        (_, index) =>
                            `${index > 9 ? index : '0' + index}:00 - ${index + 1 > 9 ? ((index + 1) % 24) : '0' + (index + 1)}:00`
                    ),
                    placeholder: 'Выберите время',
                    width: 160,
                    required: true,
                },
            ],
            error: 'Некорректная дата'
        },
        {
            fields: [
                {
                    name: 'comment',
                    component: TextAreaComponent,
                    placeholder: 'Введите комментарий',
                    required: false,
                }
            ],
        }
    ],
};
