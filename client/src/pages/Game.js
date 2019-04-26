import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Background from "../images/nature.jpg";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MainButton from "../components/MainButton";
import SecondButton from "../components/SecondButton";
import MainCard from "../components/MainCard";
import SecondCard from "../components/SecondCard";
import MainCardGroup from "../components/MainCardGroup";
import Wrapper from "../components/Wrapper";
import HeaderText from "../components/HeaderText";
import BodyText from "../components/BodyText";

const backgroundStyle = {
    width: "100%",
    height: "985px",
    backgroundImage: `url(${Background})`
};

const centerStyle = {
    textAlign: "center",
    margin: "0 auto"
};


class Game extends Component {
    render() {
        return (
            <div className="App" style={backgroundStyle}>
                <Navbar></Navbar>
                <MainContainer>
                    <Wrapper>
                        <HeaderText>Game</HeaderText>
                        <div style={centerStyle}>
                            <BodyText>Choose your trash and learn how to recycle it.</BodyText>
                        </div>
                        <MainButton><a href="./Banana.html"><img src="./images/banana.png"></img> </a></MainButton>
                        <MainButton><a href="./WaterBottle.html"><img src="./images/waterfull.png"></img> </a></MainButton>
                        <MainButton><a href="./Bottle.html"><img src="./images/pizza.png"></img> </a></MainButton>
                    </Wrapper>
                </MainContainer>
                <div style={centerStyle}>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Game;