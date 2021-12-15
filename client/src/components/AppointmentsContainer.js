import React,{useEffect, useState} from 'react';
import Appointment from './Appointment';
import { Button, Card } from 'react-bootstrap';

function AppointmentsContainer() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        fetch("/appointments")
        .then((res) => res.json())
        .then((data) => setAppointments(data))
    },[]) 

    const appointmentsToRender = () => {
        return appointments.map((appointment) => <Appointment id={appointment.id} client_name = {appointment.client_name} date = {appointment.date} time = {appointment.time} appointments={appointments.appointments} setAppointments={setAppointments} /> )
    }

    return(
        <div className="body-app">
            <Card className="card-size">                
                <Card.Body>
                    <Card.Title>ALL APPOINTMENTS</Card.Title>
                    {appointmentsToRender()}
                </Card.Body>
            </Card>
        </div>
    )
}

export default AppointmentsContainer;