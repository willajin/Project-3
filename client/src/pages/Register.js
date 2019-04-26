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
import axios from "axios";
import classnames from "classnames";

const backgroundStyle = {
  width: "100%",
  height: "985px",
  backgroundImage: `url(${Background})`
};

const colorStyle = {
  backgroundColor: "#7FAC71"
};

const centerStyle = {
  textAlign: "center",
  margin: "0 auto"
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register" style={colorStyle}>
        <div style={backgroundStyle}>
          <Navbar />
          <MainContainer>
            <Wrapper>
              <Row>
                <Col>
                  <HeaderText>Sign Up</HeaderText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="Lead text-center">
                    Create your R<sup>3</sup> account to play.
              </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={{ span: 8, offset: 2 }}>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.name
                        })}
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.email
                        })}
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                      <small className="form-text text-muted">
                        This site uses Gravatar so if you want a profile image, use
                        a Gravatar email
                  </small>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password
                        })}
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password2
                        })}
                        placeholder="Confirm Password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                      />
                      {errors.password2 && (
                        <div className="invalid-feedback">{errors.password2}</div>
                      )}
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
export default Register;
