import './BookingForm.css';

import { BookingFormData } from './BookingFormConfig';
import FormComponent from '../../Components/FormComponent/FormComponent';

const BookingForm = () => {
    return (
        <div className="booking-form-container">
            <FormComponent {...BookingFormData} />
        </div>
    );
};

export default BookingForm;
