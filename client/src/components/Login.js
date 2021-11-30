import React, { useState } from "react";
import { Alert } from "react-bootstrap"
import { useHistory, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import "../App.css";

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user);
          history.push('/')
        });
      } else {
        response.json().then((error) => setError(error.error));
      }
    });
  };


  return (
    <div className="body-app">
      <div className="form-log">
        <div className="form-container">
          <h3>Login</h3>
          <form className="register-form" onSubmit={handleSubmit}>
            {error ?
              <Alert variant="danger">{error}</Alert> : <Alert variant="danger="></Alert>
            }
            <input
              className="custom-inputs"
              type="text"
              className="form-field"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className="custom-inputs"
              type="password"
              className="form-field"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <Button variant="success" type="submit">Login</Button>{' '}
            <br />
            <Link className="d-grid gap-2" to="/signup">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;