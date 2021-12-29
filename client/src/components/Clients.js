import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Client from './Client';

function Clients() {
    const [clients, setClients] = useState([])

    const history = useHistory()

    useEffect(() => {
        fetch("/clients")
            .then((res) => res.json())
            .then((clients) => setClients(clients))
    }, [])

    const renderClients = () => {
        return clients.map((client) => <Client id={client.id} name={client.name} number={client.number} rating={client.rating} email={client.email} img_url={client.img_url} clients={clients} setClients={setClients} /> );
    };

    return (
        <div style={{
            backgroundImage:  `url(${process.env.PUBLIC_URL + '/images/gym-appointment.jpeg'})`,
            backgroundRepeat: 'no-repeat', backgroundSize: `cover`,
          }} className="body-app">
            <ul>{renderClients()}</ul>
        </div>
    );
}

export default Clients;