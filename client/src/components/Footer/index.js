// footer component
import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import logo from "../../images/r3logo.png";
import "./index.css";

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="bottom" id="nav-bar">
                <div>
                    <p id="footer-text"> Copyright | R<sup>3</sup> - Reduce, Reuse, React</p>
                </div>
            </Navbar>
        );
    }
}

export default Footer;