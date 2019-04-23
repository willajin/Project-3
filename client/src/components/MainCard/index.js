// card component
import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import SecondButton from "../SecondButton";
import tree from "../../images/tree.png";
import "./index.css";

class MainCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={tree} />
                <Card.Body>
                    <Card.Title id="card-title">Card Title</Card.Title>
                    <Card.Text id="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <SecondButton>Go somewhere</SecondButton>
                </Card.Body>
            </Card>
        );
    }
}

export default MainCard;