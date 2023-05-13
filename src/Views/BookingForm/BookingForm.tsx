import './BookingForm.css';

import FormComponent from '../../Components/FormComponent/FormComponent';
import { BookingFormData } from './BookingFormConfig';

const BookingForm = () => {
    return (
        <FormComponent title='Забронировать переговорную' className={'booking-form'} formData={BookingFormData} />
    );
};

export default BookingForm;
