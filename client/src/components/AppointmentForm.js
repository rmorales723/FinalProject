import React,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router';
import { Button } from "react-bootstrap";
import { Alert } from 'react-bootstrap'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ClientsDropdown from './ClientsDropdown';
import TimeSelectDropdown from './TimeSelectDropdown';

function AppointmentForm(currentUser) {
    const [appointments, setAppointments] = useState([])
    const history = useHistory()
    const [clientId, setClientId] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState("")

  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(`creating appointment..`)
    console.log(JSON.stringify(currentUser.currentUser))
    fetch('/appointments', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({            
            date: date,
            time: time,
            trainer_id: currentUser.currentUser,
            client_id: clientId,
        }),
    })
        .then((response) => {
            if (response.ok) {
                response.json().then(
                    history.push('/appointments')
                )
            } else {
                response.json().then(errors => {
                    setErrors(errors.errors)
                })
            }
        })
}

const displayError = () => {
    return errors.map(error => {
        return <div className="alert alert-danger" role="alert">{error}</div>
    })
}

return (
    <div style={{
        backgroundImage:  `url(${process.env.PUBLIC_URL + '/images/gym-appointment.jpeg'})`,
        backgroundRepeat: 'no-repeat', backgroundSize: `cover`,
      }} className="body-app">
        <div className="form-outsider">
            <div className="form-container">
                <form className="register-form">
                    {errors ?
                        <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                    }
                    <p>Add Appointment</p>

                    <ClientsDropdown setClientId={setClientId} />

                    <br />
                    
                    <Calendar
                        onChange={setDate}
                        value={new Date(date)}
                      />
                      <br />
                    <TimeSelectDropdown time={time} setTime={setTime} />
                      <br />
                    <Button onClick={handleOnSubmit} type="submit">Submit</Button>{' '}                
                </form>
                <div className="new-appointment-form-container-container"> </div>
            </ div>
        </div>
    </div>
)
}
export default AppointmentForm;
                    