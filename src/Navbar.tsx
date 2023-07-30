import React, { ReactElement } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LoginButton from './LoginButton';
import { useAuth } from './AuthContext';

function NavigationBar(): ReactElement {
    const { isLoggedIn } = useAuth();

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    {isLoggedIn && <Nav.Link href="#">Todo List</Nav.Link>}
                </Nav>
                <LoginButton />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
