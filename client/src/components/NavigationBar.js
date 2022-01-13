import React from 'react';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Button} from 'react-bootstrap';

function NavigationBar({handleLogout}) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Nav className="ml-auto">
                    <Nav.Link href="/clients">
                        <Button>CLIENTS</Button>
                    </Nav.Link>
                    <Nav.Link href="/clients/new">
                        <Button>ADD CLIENT</Button>
                    </Nav.Link>
                    <Nav.Link href="/appointments">
                        <Button>APPOINTMENTS</Button>
                    </Nav.Link>
                    <Nav.Link href="/appointments/new">
                        <Button>ADD APPOINTMENT</Button>
                    </Nav.Link>
                    <ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/><ul/>
                    <ul style={{float: 'right'}}>
                    <Nav.Link >
                        <Button class="float-right" onClick={handleLogout}>Logout</Button>
                    </Nav.Link>
                    </ul>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar;
