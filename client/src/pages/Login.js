import React, { Component } from "react";
import { Link } from "react-router-dom";
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="login">
        <div style={backgroundStyle}>
          <Navbar />
          <MainContainer>
            <Wrapper>
              <Row>
                <Col>
                  <HeaderText>Log In</HeaderText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="lead text-center">Sign in to play!</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={{ span: 8, offset: 2 }}>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                    <div style={centerStyle}>
                      <MainButton>
                        <input type="submit" className="btn" />
                      </MainButton>
                    </div>
                  </form>
                </Col>
              </Row>
            </Wrapper>
          </MainContainer>
        </div>
        <div style={centerStyle}>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default Login;
