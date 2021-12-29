import React,{useEffect, useState} from 'react';
import Appointment from './Appointment';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppointmentsContainer() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        try {
            fetch("/appointments").then((response) => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error('Something went wrong. Please check your rails server log!');
                }
              }).then((data) => setAppointments(data))
          } catch (e) {
            alert(e);
          }
    },[])



    const appointmentsToRender = () => {
        // const appointmentsArray = Array.from(appointments)
        return appointments.map((appointment) => <Appointment id={appointment.id} client_name = {appointment.client_name} date = {appointment.date} time = {appointment.time} appointments={appointments} setAppointments={setAppointments} /> )
        }

    return(
        <div style={{
            backgroundImage:  `url(${process.env.PUBLIC_URL + '/images/gym-appointment.jpeg'})`,
            backgroundRepeat: 'no-repeat', backgroundSize: `cover`,
          }} className="body-app">
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