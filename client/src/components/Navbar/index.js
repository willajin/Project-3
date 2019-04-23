// navbar component
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import SecondButton from "../SecondButton";
import logo from "../../images/r3logo.png";
import recycle from "../../images/recycle.png";
import cat from "../../images/cat.png";
import email from "../../images/email.png";
import "./index.css";

class MainNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" id="nav-bar">
                <Navbar.Brand href={"/"} id="brand-header"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={"/"} id="nav-option"><SecondButton><img src={recycle} /><p>Home</p></SecondButton></Nav.Link>
                        <Nav.Link href={"/mission"} id="nav-option"><SecondButton><img src={recycle} /><p>Mission</p></SecondButton></Nav.Link>
                        <Nav.Link href={"/learn"} id="nav-option"><SecondButton><img src={recycle} /><p>Learn</p></SecondButton></Nav.Link>
                        <Nav.Link href={"/game"} id="nav-option"><SecondButton><img src={recycle} /><p>Game</p></SecondButton></Nav.Link>
                        <Nav.Link href={"/contact"} id="nav-option"><SecondButton><img src={email} /><p>Contact</p></SecondButton></Nav.Link>
                        <SecondButton><img src={recycle} /><NavDropdown title="Account" id="basic-nav-dropdown nav-option">
                            <NavDropdown.Item href={"/login"}>Log In</NavDropdown.Item>
                            <NavDropdown.Item href={"/register"}>Sign Up</NavDropdown.Item>
                        </NavDropdown></SecondButton>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNav;