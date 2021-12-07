import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className="nav-links">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/clients">Clients</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/clients"></Nav.Link>
                        <Nav.Link href="/clients/new">Add Client</Nav.Link>
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