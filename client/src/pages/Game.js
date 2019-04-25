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


class Game extends Component {
    render() {
        return (
            <div className="App" style={sectionStyle}>
                <Navbar></Navbar>
                <Container>
                    <h1>GAME</h1>
                    <MainButton><a href="./Banana.html"><img src="./images/banana.png"></img> </a></MainButton>
                    <MainButton><a href="./WaterBottle.html"><img src="./images/waterfull.png"></img> </a></MainButton>
                    <MainButton><a href="./Pizza.html"><img src="./images/pizza.png"></img> </a></MainButton>

                </Container>
            </div>
        );
    }
}

export default Game;