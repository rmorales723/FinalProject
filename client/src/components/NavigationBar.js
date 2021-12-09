import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        
        <div className="nav-links">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/clients">CLIENTS</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/"></Nav.Link>
                        <Nav.Link href="/clients"></Nav.Link>
                        <Nav.Link href="/clients/new">ADD CLIENT</Nav.Link>
                    </Nav>
                    <NavLink activeClassName="active" to={'/clients'}>
                       {/* Clients All */}
                    </NavLink>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;