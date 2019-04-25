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


class Learn extends Component {
    render() {
        return (
            <div className="App">
                <div style={backgroundStyle}>
                    <Navbar></Navbar>
                    <MainContainer>
                        <Wrapper>
                            <img src={recycle} />
                            <HeaderText>Learn How to Reduce, Reuse, Recycle...with React!</HeaderText>
                            <BodyText>Why is recycling important?</BodyText>
                            <BodyText>Because we all live on this Earth and have a responsibility to take care of it as best as we can.</BodyText>
                        </Wrapper>
                    </MainContainer>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default Learn;