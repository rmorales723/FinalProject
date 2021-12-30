import { Button, Card } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import EditAppointment from './EditAppointment';
import { Link } from "react-router-dom";
// import '../App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import StarRating from './StarRating';

const Client = ({ id, name, number, email, rating, img_url, clients, setClients }) => {

const [currentRating, setCurrentRating] = useState(rating);

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

const history = useHistory();

const editAppointment = (event) => {
    history.push(`/appointments/${id}/edit`);
}
    return(
        <div className="card-box">
        <Card className="card-size" style={{ width: '18rem' }}>
            <Card.Img style={styles.cardImage} className="img-url-size" variant="top" src={img_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{number}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                <Card.Text><StarRating totalStars={5} currentRating={rating} displayStar={true} clientId={id} setCurrentRating={setCurrentRating} /></Card.Text>
                <div className="button-organizer">
                    <div className="d-grid gap-2">
                        <Link className="d-grid gap-2" to={`/clients/${id}/edit`}>
                            <Button variant="primary" size="sm" >EDIT</Button>
                        </Link>
                        <Button id={id} className="gap-2" variant="danger" size="sm" onClick={deleteClient}>DELETE</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>      
    )
  }

export default Client;