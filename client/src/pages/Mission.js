import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Background from "../images/nature.jpg";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MainButton from "../components/MainButton";

var sectionStyle = {
    width: "100%",
    height: "985px",
    backgroundImage: `url(${Background})`
};


class Mission extends Component {
    render() {
        return (
            <div className="App" style={sectionStyle}>
                <Navbar></Navbar>
                <MainContainer>
                    <Wrapper>
                        <h1>MISSION</h1>
                    </Wrapper>
                </MainContainer>
            </div>
        );
    }
}

export default Mission;