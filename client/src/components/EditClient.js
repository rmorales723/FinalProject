import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router';
import '../App.css';


function EditClient() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img_url, setImg] = useState('')
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        prePopulateClients();
    }, [])
    function prePopulateClients() {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(claim => {
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
                
                name,
                number,
                img_url: img_url,
            }),
        })
            .then((res) => {
                history.push('/clients')
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
                            placeholder="number"
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
                        {/* <textarea
                            onChange={(event) => setGoals(event.target.value)}
                            value={goals}
                            className="form-field"
                            placeholder="goals"
                            type="text"
                            id="goals"
                            name="goals"
                            form="usrform">Enter goals here...
                        </textarea> */}
                        <Button variant="success" type="submit">Submit</Button>{' '}
                    </form>
                    <div className="new-member-form-container-container"> </div>
                </ div>
            </div>
        </div>
    )
}

export default EditClient;