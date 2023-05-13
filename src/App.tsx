import './App.css'
import 'react-datepicker/dist/react-datepicker.css';

// import BookingForm from './Views/BookingForm/BookingForm';
import FormComponent from './Comp/FormComponent/FormComponent';


function App() {
    document.body.classList.add('color-black');

    return (
        <FormComponent />
    )
}

export default App
