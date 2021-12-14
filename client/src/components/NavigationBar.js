import React from 'react';
import { Nav, Container, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

function NavigationBar() {
    return (        
        <div>            
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/clients">CLIENTS</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/"></Nav.Link>
                    <Nav.Link href="/clients/new">ADD CLIENT</Nav.Link>
                    </Nav>
                    <Navbar.Brand href="/appointments">APPOINTMENTS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/appointments/new">ADD APPOINTMENT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;
