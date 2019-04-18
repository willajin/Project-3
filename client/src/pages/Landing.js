import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Background from "../images/nature.jpg";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import MainButton from "../components/MainButton";

var sectionStyle = {
    width: "100%",
    height: "1237px",
    backgroundImage: `url(${Background})`
};


class Landing extends Component {
    render() {
        return (
            <div className="App" style={sectionStyle}>
                <Navbar></Navbar>
                <Wrapper>
                    <Jumbotron>
                    </Jumbotron>
                    <Link to={'./login'}>
                            <MainButton>
                                Log in
                    </MainButton>
                        </Link>
                        <Link to={'./register'}>
                            <MainButton>
                                Sign up
                    </MainButton>
                        </Link>
                </Wrapper>
            </div>
        );
    }
}

export default Landing;