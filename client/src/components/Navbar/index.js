// navbar component
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./index.css";

class MainNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home" id="brand-header">R<sup>3</sup><span id="tag-line"> Reduce, Reuse, React</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#about">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNav;