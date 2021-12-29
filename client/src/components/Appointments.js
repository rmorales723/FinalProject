import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Appointments() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch("/appointments")
            .then((res) => res.json())
            .then((appointments) => setAppointments(appointments))
    }, [])

    const deleteAppointments = (event) => {
        fetch(`/appointments/${event.target.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            const filterAppointments = appointments.filter(appointment => {
                return appointment.id != event.target.id;
            })
            return setAppointments(filterAppointments)
        });
    }

    const renderAppointments = () => {
        return appointments.map((appointment) => {
            return (
                <div
                  className="card-box">
                    <Card className="card-size" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{appointment.client_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{appointment.date}</Card.Subtitle>
                            <Card.Text>{appointment.time}</Card.Text>
                            <div className="button-organizer">
                                <div className="d-grid gap-2">
                                    <Link className="d-grid gap-2" to={`/appointment/${appointment.id}/edit`}>
                                        <Button variant="primary" size="sm" >Edit</Button>
                                    </Link>
                                    <Button id={appointment.id} className="d-grid gap-2" variant="danger" size="sm" onClick={deleteAppointments}>Delete</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        });
    };

    return (
        <div>

            <div className="body-appointment">
                <br />
                <ul>{renderAppointments()}</ul>
            </div>
        </div>
    );
}

export default Appointments;