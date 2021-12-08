import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap'

function AppointmentsForm() {
    const [appointments, setAppointments] = useState([])
    const [client_name, setClient_Name] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState("")

    const renderError = () => {
        return errors.map(error => {
          return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }


const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_name: client_name,
        date: date,
        time: time
      })
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((appointments) => {
            setAppointments(appointments);
            // localStorage.setItem("currentUserId", trainer.id);
            // history.push('/appointments')
          })
        } else {
          response.json().then((errors => setErrors(errors.errors)))
        }
      })
      return (
        <div className="body-app">
          <div className="form-outsider">
            <div className="form-container">
              <div className="authForm">
                <form className="register-form" onSubmit={handleSubmit}>
                  {errors ?
                    <Alert variant="danger">{errors && renderError()}</Alert> : <Alert variant="danger="></Alert>
                  }
                  <h1>ADD APPOINTMENT</h1>
                  <input
                    type="text"
                    id="client_name"
                    className="form-field"
                    placeholder="Client Name"
                    value={client_name}
                    onChange={(event) => setClient_Name(event.target.value)}
                  />
                  <input
                    type="text"
                    id="date"
                    className="form-field"
                    placeholder="Date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                  <input
                    type="time"
                    id="time"
                    className="form-field"
                    placeholder="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  />
                  <br />
                  <Button variant="success" type="submit">THOUGHTS?</Button>{' '}
                  <p>- or -</p>
                  <Link className="d-grid gap-2" to="/">
                    <Button variant="secondary">THOUGHTS?</Button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default AppointmentsForm;