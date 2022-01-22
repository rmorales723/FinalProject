import React,{useEffect, useState} from 'react';
import Appointment from './Appointment';
import { Button, Card } from 'react-bootstrap';
// import Calendar from 'react-calendar';
import { Calendar, momentLocalizer, dateFnsLocalizer, Event} from 'react-big-calendar';
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import startOfWeek from 'date-fns/startOfWeek'
import enUS from 'date-fns/locale/en-US'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import getDay from 'date-fns/getDay'

function AppointmentsContainer() {
    const [appointments, setAppointments] = useState([])
    const [selectedEvent, setSelectedEvent] = useState(undefined)
    const [modalState, setModalState] = useState(false)
 
    const handleSelectedEvent = (event) => {
       setSelectedEvent(event)
       setModalState(true)
    }

    const Modal = () => {
      return (
         <div className={`modal-${modalState == true ? 'show' : 'hide'}`}>
           {selectedEvent.title}
           Show the links!
         </div>
      )
    }

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

    const locales = {
      'en-US': enUS,
    }

    const localizer = dateFnsLocalizer({
      format,
      parse,
      startOfWeek,
      getDay,
      locales,
    })

    const start = new Date('2022-01-21 19:00')
    const end = new Date('2022-01-21 20:00')

    const myEventsList = appointments.map((app) => {
      return {
        title: app.title,
        start: new Date(app.start),
        end: new Date(app.end)
      };
    })   

    const MyCalendar = props => (
      <div>
        {selectedEvent && <Modal />}
        <Calendar
          defaultView='week'
          events={myEventsList}
          localizer={localizer}                    
          resizable
          allDayAccessor={false}
          onSelectEvent={(e) => handleSelectedEvent(e)}
          style={{ height: '100vh' }}
        />
      </div>
    )

    const appointmentsToRender = () => {      
      // console.log('appointmentDates', appointmentDates);        
        // return appointments.map((appointment) => <Appointment id={appointment.id} client_name = {appointment.client_name} date = {appointment.date} time = {appointment.time} appointments={appointments} setAppointments={setAppointments} /> )
        // return <Calendar value={appointmentDates} />
        // return <Calendar defaultValue={[appointments[0].date, appointments[1].date, appointments[2].date]} />
        return <MyCalendar />
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