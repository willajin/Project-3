// button component
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./index.css";

function SecondButton(props) {
    return (
            <Button variant="dark" id="second-button">
                {props.children}
            </Button>
    );
}

export default SecondButton;