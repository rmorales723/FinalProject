import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";

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

    return(
        <div>
            <p>{client_name}</p>
            <p>{date}</p>
            <p>{time}</p>
            <Button id={id} className="d-grid gap-2" variant="danger" size="sm" onClick={deleteAppointment}>DELETE</Button>
            <hr />
        </div>
    )
  }


export default Appointment;