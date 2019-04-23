// card component
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import nature from "../../images/nature.jpg";
import "./index.css";

class SecondCard extends Component {
    render() {
        return (
            <Card className="bg-dark text-white">
                <Card.Img src={nature} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title id="card-title">Card title</Card.Title>
                    <Card.Text id="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    }
}

export default SecondCard;