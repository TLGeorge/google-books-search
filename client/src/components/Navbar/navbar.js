import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Google-Books-Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/search">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
