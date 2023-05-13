import './BookingForm.css';

// import { BookingFormData } from './BookingFormConfig';
import FormComponent from '../../Comp/FormComponent/FormComponent';

const BookingForm = () => {
    return (
        <div className="booking-form-container">
            <FormComponent title="Забронировать переговорную" className="booking-form" />
        </div>
    );
};

export default BookingForm;
