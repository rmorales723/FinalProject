import React,{useEffect, useState} from 'react';
import Appointment from './Appointment';
import { Button, Card } from 'react-bootstrap';
import Calendar from 'react-calendar';

function AppointmentsContainer() {
    const [appointments, setAppointments] = useState([])
    const [appointmentDates, setAppointmentDates] = useState([])

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
    }, [])

    if(appointments.length < 1) {
      return <div>Loading...</div>
    }

    function appointmentDatess() {
      // console.log('appointments', appointments);
      // let apps = appointments.map(app => new Date(app.date))
      const apps = appointments.map((app) => {
        // console.log('app.date', app.date);
        return new Date(app.date);
      })
      // console.log('apps', apps);
      setAppointmentDates(apps);
      // return apps;
    }

    // appointmentDatess();

    const appointmentsToRender = () => {      
      // console.log('appointmentDates', appointmentDates);        
        // return appointments.map((appointment) => <Appointment id={appointment.id} client_name = {appointment.client_name} date = {appointment.date} time = {appointment.time} appointments={appointments} setAppointments={setAppointments} /> )
        // return <Calendar value={appointmentDates} />
        // return <Calendar defaultValue={[appointments[0].date, appointments[1].date, appointments[2].date]} />
        return <Calendar value={['2017-01-01', '2017-08-01', appointments[0].date]} />
        // return <Calendar value={[new Date(appointments[2].date), new Date(appointments[1].date)]} />
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