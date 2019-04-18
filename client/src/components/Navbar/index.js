// navbar component
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./index.css";

class MainNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href={"/"} id="brand-header">R<sup>3</sup></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={"/"}>Home</Nav.Link>
                        <Nav.Link href={"/mission"}>Mission</Nav.Link>
                        <Nav.Link href={"/learn"}>Learn</Nav.Link>
                        <Nav.Link href={"/game"}>Game</Nav.Link>
                        <Nav.Link href={"/contact"}>Contact</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href={"/login"}>Log In</NavDropdown.Item>
                            <NavDropdown.Item href={"/register"}>Sign Up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNav;