import React,{useState} from 'react'
import { useHistory, useParams } from 'react-router';
import { Button } from "react-bootstrap";
import { Alert } from 'react-bootstrap'

function AppointmentForm() {
    const [appointments, setAppointments] = useState([])
    const history = useHistory()
    const [client_name, setClient_Name] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState("")

    const addAppointment = () => {
      return {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
              
          },
          body: JSON.stringify({
              client_name: client_name,
              date: date,
              time: time,
          })
      }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    fetch('/appointments', addAppointment(), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            client_name: client_name,
            date: date,
            time: time
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
    <div className="body-app">
        <div className="form-outsider">
            <div className="form-container">
                <form className="register-form" onSubmit={handleOnSubmit}>
                    {errors ?
                        <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                    }
                    <p>Add Appointment</p>
                    <input
                        onChange={(event) => setClient_Name(event.target.value)}
                        value={client_name}
                        className="form-field"
                        placeholder="Client Name"
                        type="text"
                        id="client_name"
                        name="client_name" />
                    <input
                        onChange={(event) => setDate(event.target.value)}
                        value={date}
                        className="form-field"
                        placeholder="Date"
                        type="text"
                        id="date"
                        name="date" />
                    <input
                        onChange={(event) => setTime(event.target.value)}
                        value={time}
                        className="form-field"
                        placeholder="Time"
                        type="text"
                        id="time"
                        name="time" /> 
                    <Button variant="success" type="submit">Submit</Button>{' '}                    
                </form>
                <div className="new-appointment-form-container-container"> </div>
            </ div>
        </div>
    </div>
)
}
export default AppointmentForm;
                    