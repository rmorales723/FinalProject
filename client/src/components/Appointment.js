import React from 'react'
import { useState, useEffect } from 'react';


const Appointment = ({ client_name, date, time }) => {
    return(
        <div>
            <p>{client_name}</p>
            <p>{date}</p>
            <p>{time}</p>
        </div>
    )
  }


export default Appointment;