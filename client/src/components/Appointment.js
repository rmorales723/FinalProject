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
        <div>
            <p>{client_name}</p>
            <p>{date}</p>
            <p>{time}</p>
            <br />            
            <Button id={id} className="d-grid gap-2" variant="danger" size="sm" onClick={editAppointment}>EDIT</Button>            
            <Button id={id} className="d-grid gap-2" variant="danger" size="sm" onClick={deleteAppointment}>DELETE</Button>
            <hr />
        </div>
    )
  }

export default Appointment;