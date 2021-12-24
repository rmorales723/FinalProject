import React from 'react'
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../App.css';

function NewClient() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img_url, setImg] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState("")
    const history = useHistory()

    const handleOnSubmit = (event) => {
        event.preventDefault()
        fetch('/clients', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                number: number,
                img_url: img_url,
                email: email
            }),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((
                        history.push('/clients')
                    ))
                } else {
                    response.json().then(errors => {
                        setErrors(errors.errors)
                    })
                }
            })
    }
                

    const displayError = () => {
        return errors.map(error => {
            return <div className="alert alert-danger" role="alert">{error}</div>
        })
    }

    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/images/membership.jpeg'})`,
             backgroundSize: `cover`
          }} className="body-app">
            <div className="form-outsider">
                <div className="form-container">
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        {errors ?
                            <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                        }
                        <p>Add Client</p>
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
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            className="form-field"
                            placeholder="Email"
                            type="text"
                            id="email"
                            name="email" />                            
                        <input
                            onChange={(event) => setImg(event.target.value)}
                            value={img_url}
                            className="form-field"
                            placeholder="Img"
                            type="text"
                            id="img_url"
                            name="img_url" />
                        <Button type="submit">Submit</Button>{' '}
                    </form>
                    <div className="new-client-form-container-container"> </div>
                </ div>
            </div>
        </div>
    )
}

export default NewClient;