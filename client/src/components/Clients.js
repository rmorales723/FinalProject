import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Clients() {
    const [clients, setClients] = useState([])

    const history = useHistory()

    useEffect(() => {
        fetch("/clients")
            .then((res) => res.json())
            .then((clients) => setClients(clients))
    }, [])

    const deleteClient = (event) => {
        fetch(`/clients/${event.target.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            const filterClients = clients.filter(client => {
                return client.id != event.target.id;
            })
            setClients(filterClients);
            // history.push('/clients');
        });
    }

    const styles = {
        cardImage: {
            objectFit: 'cover',
            borderRadius: 55,
            width: '100%',
            height: '100%'
        }
      }

    
    const renderClients = () => {        
        return clients.map((client) => {
            return (
                <div className="card-box">
                    <Card className="card-size" style={{ width: '18rem' }}>
                        <Card.Img style={styles.cardImage} className="img-url-size" variant="top" src={client.img_url} />
                        <Card.Body>
                            <Card.Title>{client.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{client.number}</Card.Subtitle>
                            {/* <Card.Text>{client.goals}</Card.Text> */}
                            <div className="button-organizer">
                                <div className="d-grid gap-2">
                                    <Link className="d-grid gap-2" to={`/clients/${client.id}/edit`}>
                                        <Button variant="primary" size="sm" >EDIT</Button>
                                    </Link>
                                    <Button id={client.id} className="gap-2" variant="danger" size="sm" onClick={deleteClient}>DELETE</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            )
        });
    };

    return (
        <div className="body-app">            
            <ul>{renderClients()}</ul>
        </div>        
    );
}

export default Clients;