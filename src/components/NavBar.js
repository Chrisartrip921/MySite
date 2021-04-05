import React from 'react';
import '../App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar className="nav-color" collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand exact href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link exact href="/">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
            
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}