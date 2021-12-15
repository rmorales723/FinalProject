import React from 'react';
import { Nav, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import { Button, Card } from 'react-bootstrap';

function NavigationBar({handleLogout}) {
    return (        
        <div>            
            <Navbar bg="light" expand="lg">
                <Nav className="me-auto">                                    
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
                    <Button onClick={handleLogout}>Logout</Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationBar;
