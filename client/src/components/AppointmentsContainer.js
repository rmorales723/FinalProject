import React,{useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import startOfWeek from 'date-fns/startOfWeek';
import enUS from 'date-fns/locale/en-US';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/getDay';
import { useHistory } from 'react-router';

function AppointmentsContainer() {
    const [appointments, setAppointments] = useState([])

    const history = useHistory();

    const handleSelectedEvent = (event) => {
       history.push(`/appointments/${event.id}/edit`);
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

    const myEventsList = appointments.map((app) => {
      return {
        id: app.id,
        title: app.title,
        start: new Date(app.start),
        end: new Date(app.end)
      };
    })

    const appointmentsToRender = () => {
      return <Calendar
        defaultView='week'
        events={myEventsList}
        localizer={localizer}
        resizable
        allDayAccessor={false}
        onSelectEvent={(e) => handleSelectedEvent(e)}
        style={{ height: '100vh' }}
      />
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