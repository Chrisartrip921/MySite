import React from 'react';
import '../App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import linkedinLogo from './photos/linkedinLogo';

export default function NavBar() {
    return (
        <Navbar className="nav-color" collapseOnSelect expand="sm" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">

                        <Nav.Link exact className="mr-5" href="/">Home</Nav.Link>
                        <Nav.Link className="mr-5" href="/about">About</Nav.Link>
                        <Nav.Link className="mr-5"href="/projects">Projects</Nav.Link>

                    </Nav>
                    <Nav>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
