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


class Home extends Component {
    render() {
        return (
            <div className="App" style={sectionStyle}>
                <Navbar></Navbar>
                <Container>
                    <Jumbotron>
                    </Jumbotron>
                <Row>
                    <Col xs={6} md={4}>
                        Column
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Home;