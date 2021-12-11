import { Button, Card } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import '../App.css';


function EditClient() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img_url, setImg] = useState('')
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        upDateClient();
    }, [])
    function upDateClient() {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(client => {
                setName(client.name)
                setNumber(client.number)
                setImg(client.img_url)
            })
    }
                

    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch(`/clients/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({                
                name: name,
                number: number,
                img_url: img_url
            }),
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then(() => {
                history.push('/appointments')
            })
        }
    })
    }

    return (
        <div className="body-app-edit">
            
            <div className="form-outsider">
                <div className="form-container">
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        <p>Edit Client</p>                        
                        <input
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            className="form-field"
                            placeholder="Name"
                            type="text"
                            id="name"
                            name="name" />
                        <input
                            onChange={(event) => setNumber(event.target.value)}
                            value={number}
                            className="form-field"
                            placeholder="Number"
                            type="text"
                            id="number"
                            name="number" />
                        <input
                            onChange={(event) => setImg(event.target.value)}
                            value={img_url}
                            className="form-field"
                            placeholder="Img Url"
                            type="text"
                            id="img_url"
                            name="img_url" />
                        <Button variant="success" type="submit">Submit</Button>{' '}
                        
                    </form>
                    <div className="new-member-form-container-container"> </div>
                </ div>
            </div>
        </div>
    )
}

export default EditClient;