import React, { useEffect, useState } from 'react'

function EditAppointment() {
    const [appointment, setAppointment] = useState('')
    const [client_name, setClient_Name] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
}

useEffect(() =>{
    upDateAppointment();
}, [])

function upDateAppointment() {
    fetch('/appointments/${id}')
    .then(res => res.json())
    .then(appointment => {
        setClient_Name(appointment.client_name)
        setDate(appointment.date)
        setTime(appointment.time)

})
    }

    

export default EditAppointment;