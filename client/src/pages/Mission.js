import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../components/Navbar";
import Background from "../images/nature.jpg";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MainButton from "../components/MainButton";

var sectionStyle = {
    width: "100%",
    height: "1237px",
    backgroundImage: `url(${Background})`
};


class Mission extends Component {
    render() {
        return (
            <div className="App" style={sectionStyle}>
                <Navbar></Navbar>
                <Container>
                    <h1>MISSION</h1>
                </Container>
            </div>
        );
    }
}

export default Mission;