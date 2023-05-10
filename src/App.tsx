import './App.css'
import 'react-datepicker/dist/react-datepicker.css';

import BookingForm from './Views/BookingForm/BookingForm';

function App() {
    document.body.classList.add('color-black');

    return (
        <BookingForm />
    )
}

export default App
