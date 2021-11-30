import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap'
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../App.css';

function NewClient() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img_url, setImg] = useState('')
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
                name,
                number,
                img_url: img_url
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
        <div className="body-app">
            <div className="form-outsider">
                <div className="form-container">
                    <form className="register-form" onSubmit={handleOnSubmit}>
                        {errors ?
                            <Alert variant="danger">{errors && displayError()}</Alert> : <Alert variant="danger="></Alert>
                        }
                        <p>Add Client/p>
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
                            value={item_name}
                            className="form-field"
                            placeholder="Number"
                            type="text"
                            id="number"
                            name="number" />
                        <input
                            onChange={(event) => setImg(event.target.value)}
                            value={image_url}
                            className="form-field"
                            placeholder="Img"
                            type="text"
                            id="img_url"
                            name="img_url" />
                        {/* <textarea
                            onChange={(event) => setGoals(event.target.value)}
                            value={goals}
                            className="form-field"
                            placeholder="Goals"
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

export default NewClient;