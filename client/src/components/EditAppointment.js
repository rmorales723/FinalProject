import { Button, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import Calendar from 'react-calendar';
import ClientsDropdown from './ClientsDropdown';
import TimeSelectDropdown from './TimeSelectDropdown';
import { Link } from "react-router-dom"

function EditAppointment({currentUser}) {
    const { id } = useParams()
    const history = useHistory()
    const [clientName, setClientName] = useState('')
    const [clientId, setClientId] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState("")

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAppointment();
    }, [loading])

    function fetchAppointment() {
        fetch(`/appointments/${id}`)
            .then(res => res.json())
            .then(appointment => {
                setClientName(appointment.client_name);
                setDate(appointment.date);
                setTime(appointment.time);
                setClientId(appointment.client_id);
                setLoading(false);
            })
    }

    if (loading) {
        return (
            <div> Loading!!! </div>
        );
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch(`/appointments/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trainer_id: currentUser.currentUser,
                client_id: clientId,
                date: date,
                time: time
            }),
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then(() => {
                        history.push(`/appointments`);
                    })
                } else {
                    res.json().then(errors => {
                        setErrors(errors.errors)
                    })
                }
            })
    }

    const deleteAppointment = (event) => {
        fetch(`/appointments/${event.target.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            history.push(`/appointments`);
        });
    }

    const displayError = () => {
        console.log(`inside displayError: ${errors}`);
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    return (
        <div style={{
            backgroundImage:  `url(${process.env.PUBLIC_URL + '/images/gym-appointment.jpeg'})`,
            backgroundRepeat: 'no-repeat', backgroundSize: `cover`,
          }} className="body-app-edit">
            <div className="form-outsider">
                <div className="form-container">
                    <form onSubmit={handleOnSubmit}>
                    {errors ?
                        <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                    }
                    <p>EDIT APPOINTMENT</p>

                    <ClientsDropdown setClientId={setClientId} clientName={clientName} />
                    <br />
                    <Calendar
                        onChange={setDate}
                        value={new Date(date)}
                    />
                    <br />
                    <TimeSelectDropdown time={time} setTime={setTime} />
                    <br />
                    <Link class="btn btn-primary" to="/appointments">Back</Link>
                    <br />
                    <br />
                    <Button onClick={handleOnSubmit} variant="danger" type="submit">Update Appointment</Button>{' '}
                    <br />
                    <br />
                    <Button id={id} variant="danger" onClick={deleteAppointment}>Delete Appointment</Button>{' '}
                <div className="new-member-form-container-container"> </div>
            </form>
            </div>
            </div>
        </div>
    )
}

export default EditAppointment;

