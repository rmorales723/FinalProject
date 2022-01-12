import React from 'react';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Button} from 'react-bootstrap';

function NavigationBar({handleLogout}) {
    return (
        <div>
            <Navbar>
                <Nav className='container-fluid'>
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
                    <Nav.Link>
                        <Button onClick={handleLogout}>Logout</Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar;
