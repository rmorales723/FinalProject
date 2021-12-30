import { Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";
// import '../App.css';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import ClientsDropdown from './ClientsDropdown';
import TimeSelectDropdown from './TimeSelectDropdown';

function EditAppointment({currentUser}) {
    const { id } = useParams()
    const history = useHistory()
    const [clientName, setClientName] = useState('')
    const [clientId, setClientId] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')

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
                }
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
                    <Button onClick={handleOnSubmit} class="btn btn-primary" to="/appointments">Back</Button>     
                    <br />
                    <br />
                    <Button onClick={handleOnSubmit} variant="danger" type="submit">Submit</Button>{' '}
                <div className="new-member-form-container-container"> </div>
            </form>
            </div>
            </div>
        </div>
    )
}



export default EditAppointment;

