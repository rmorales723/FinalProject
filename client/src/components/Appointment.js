import { Button, Card } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import EditAppointment from './EditAppointment';
import { Link } from "react-router-dom";
import '../App.css';


const Appointment = ({ id, client_name, date, time, appointments, setAppointments }) => {

const deleteAppointment = (event) => {
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

const history = useHistory();

const editAppointment = (event) => {
    history.push(`/appointments/${id}/edit`);
}
    return(
        <div className="card-box">
            <Card className="card-size" style={{ width: '18rem' }}>                
                <Card.Body>
                    <Card.Title>{client_name}</Card.Title>                    
                    <Card.Text>{date}</Card.Text>
                    <Card.Text>{time}</Card.Text>
                    <br />

                    <Card.Text>
                        <Button id={id} variant="primary" size="sm" onClick={editAppointment}>EDIT</Button>
                    </Card.Text>

                    <Card.Text>
                        <Button id={id} variant="danger" size="sm" onClick={deleteAppointment}>DELETE</Button>
                    </Card.Text>                                    
                </Card.Body>
            </Card>
        </div>        
    )
  }

export default Appointment;