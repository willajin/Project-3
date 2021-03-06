// button component
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./index.css";

function MainButton(props) {
    return (
            <Button id="main-button">
                {props.children}
            </Button>
    );
}

export default MainButton;