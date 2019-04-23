// card component
import React, { Component } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import SecondButton from "../SecondButton";
import tree from "../../images/tree.png";
import bluebin from "../../images/bluebin.png";
import "./index.css";

class MainCardGroup extends Component {
    render() {
        return (
            <CardGroup>
                <Card id="card-group">
                    <SecondButton>
                        <Card.Body>
                            <Card.Img variant="top" src={bluebin} />
                            <Card.Title id="card-title">Card title</Card.Title>
                            <Card.Text id="card-text">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </SecondButton>
                </Card>
                <Card id="card-group">
                    <SecondButton>
                        <Card.Body>
                            <Card.Img variant="top" src={bluebin} />
                            <Card.Title id="card-title">Card title</Card.Title>
                            <Card.Text id="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </SecondButton>
                </Card>
                <Card id="card-group">
                    <SecondButton>
                        <Card.Body>
                            <Card.Img variant="top" src={bluebin} />
                            <Card.Title id="card-title">Card title</Card.Title>
                            <Card.Text id="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </SecondButton>
                </Card>
            </CardGroup>
        );
    }
}

export default MainCardGroup;