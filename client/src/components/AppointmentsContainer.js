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
   return appointments.map((appointment) => <Appointment id={appointment.id} client_name = {appointment.client_name} date = {appointment.date} time = {appointment.time} appointments={appointments} setAppointments={setAppointments} /> )
}

return(
    <div>
        <h1> ALL APPOINTMENTS </h1>
        {appointmentsToRender()}
    </div>
)
}


export default AppointmentsContainer;