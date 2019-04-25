import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import Background from "../images/nature.jpg";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MainButton from "../components/MainButton";
import SecondButton from "../components/SecondButton";
import Carousel from "../components/Carousel";
import MainCard from "../components/MainCard";
import SecondCard from "../components/SecondCard";
import MainCardGroup from "../components/MainCardGroup";
import Wrapper from "../components/Wrapper";
import HeaderText from "../components/HeaderText";
import BodyText from "../components/BodyText";
import recycle from "../images/recycle.png";
import cat from "../images/cat.png";

const backgroundStyle = {
    width: "100%",
    height: "985px",
    backgroundImage: `url(${Background})`
};

const colorStyle = {
    backgroundColor: "white"
};

class Mission extends Component {
    render() {
        return (
            <div className="App">
                <div style={backgroundStyle}>
                    <Navbar></Navbar>
                    <MainContainer>
                        <Wrapper>
                            <img src={recycle} />
                            <HeaderText>Mission</HeaderText>
                            <BodyText>Our mission is to educate students on how to properly recycle and not be a terrible human and become better world citizens for a better tomorrow through a fun experience.</BodyText>
                            <BodyText>With our game, students can navigate and solve our simple challenges to get the top score. Students will be have to fight evil garbage and items the general public thinks is recyclable but in reality isn’t the case. This is a simple and easy game that can teach people how to properly recycle.</BodyText>
                            <BodyText>Over time we would like to add components to the game that will educate students on how to minimize their ecological footprint, composting, etc..</BodyText>
                        </Wrapper>
                    </MainContainer>
                </div>
                <div style={colorStyle}>
                    <MainContainer>
                        <img src={cat} />
                        <HeaderText>Meet the team</HeaderText>
                        <SecondButton><img src={cat} />Antony Liu</SecondButton>
                        <SecondButton><img src={cat} />Jeffrey Orea</SecondButton>
                        <SecondButton><img src={cat} />Raul Lanuza</SecondButton>
                        <SecondButton><img src={cat} />Willa Jin</SecondButton>
                        <SecondButton><img src={cat} />Ynah Sebastian</SecondButton>
                    </MainContainer>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Mission;