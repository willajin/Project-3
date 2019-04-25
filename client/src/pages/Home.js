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

const backgroundStyle = {
    width: "100%",
    height: "985px",
    backgroundImage: `url(${Background})`
};

const colorStyle = {
    backgroundColor: "white"
};

class Home extends Component {
    render() {
        return (
            <div className="App" style={backgroundStyle}>
                <Navbar></Navbar>
                <MainContainer>
                    <Row>
                        <Link to={'./learn'}>
                            <MainButton>
                                <h1>Learn to Reduce, Reuse, React</h1>
                            </MainButton>
                        </Link>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={'./mission'}>
                                <SecondButton>
                                    What is R<sup>3</sup> ?
                            </SecondButton>
                            </Link>
                        </Col>
                    </Row>
                </MainContainer>
                <div style={colorStyle}>
                    <MainContainer>
                        <Row>
                            <MainCardGroup></MainCardGroup>
                        </Row>
                    </MainContainer>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Home;