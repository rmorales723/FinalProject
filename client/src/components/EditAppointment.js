import { Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";
import '../App.css';

function EditAppointment() {
    const { id } = useParams()
    const history = useHistory()
    const [clientName, setClientName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => {
        fetchAppointment();
    }, [])
    function fetchAppointment() {
        fetch(`/appointments/${id}`)
            .then(res => res.json())
            .then(appointment => {
                setClientName(appointment.client_name);
                setDate(appointment.date);
                setTime(appointment.time);
            })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        // console.log('UPDATING !!!');
        fetch(`/appointments/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_name: clientName,
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
        <div className="body-app-edit">
            <div className="form-outsider">
                <div className="form-container">
                    <form onSubmit={handleOnSubmit}>
                    <p>EDIT APPOINTMENT</p>
                    <input
                    onChange={(event) => setClientName(event.target.value)}
                    value={clientName}
                    className="form-field"
                    placeholder="Client_name"
                    type ="text"
                    id="client_name"
                    name="client_name"/>
                    <input
                    onChange={(event) => setDate(event.target.value)}
                    value={date}
                    className="form-field"
                    placeholder="Date"
                    type ="text"
                    id="Date"
                    name="Date"/>
                    <input
                    onChange={(event) => setTime(event.target.value)}
                    value={time}
                    className="form-field"
                    placeholder="Time"
                    type ="text"
                    id="Time"
                    name="Time" />
                    <br />
                    <Button onClick={handleOnSubmit} class="btn btn-primary" to="/appointments">Back</Button>     
                    <br />
                    <br />
                    <Button onClick={handleOnSubmit} variant="success" type="submit">Submit</Button>{' '}
                <div className="new-member-form-container-container"> </div>
            </form>
            </div>
            </div>
        </div>
    )
}



export default EditAppointment;

