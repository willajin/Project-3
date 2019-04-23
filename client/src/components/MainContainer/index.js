// container component
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import "./index.css";

function MainContainer(props) {
    return (
            <Container id="main-container">
                {props.children}
            </Container>
    );
}

export default MainContainer;