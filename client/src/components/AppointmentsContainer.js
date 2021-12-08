import React,{useEffect, useState} from 'react'
import Appointment from './Appointment'


function AppointmentsContainer() {
const [appointments, setAppointments] = useState([])

useEffect(()=>{
    fetch("/appointments")
    .then((res) => res.json())
    .then((data) => setAppointments(data))
},[]) 

const appointmentsToRender = () => {
   return appointments.map((appointment) => <Appointment client_name = {appointment.client_name} date = {appointment.date} time = {appointment.time} /> )
}

return(<div>{appointmentsToRender()}</div>)

}


export default AppointmentsContainer;