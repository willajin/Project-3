// card component
import React, { Component } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import SecondButton from "../SecondButton";
import tree from "../../images/tree.png";
import bluebin from "../../images/bluebin.png";
import recycle from "../../images/recycle.png";
import "./index.css";

class MainCardGroup extends Component {
    render() {
        return (
            <CardGroup>
                <Card id="card-group">
                    <SecondButton>
                        <Card.Body>
                            <Card.Img variant="top" src={recycle} />
                            <Card.Title id="card-title">Reduce</Card.Title>
                            <Card.Text id="card-text">
                                Don't be trashy! With our game you can learn how to help our world
                                in a fun way.
                        </Card.Text>
                        </Card.Body>
                    </SecondButton>
                </Card>
                <Card id="card-group">
                    <SecondButton>
                        <Card.Body>
                            <Card.Img variant="top" src={recycle} />
                            <Card.Title id="card-title">Reuse</Card.Title>
                            <Card.Text id="card-text">
                            Let's all be better to our planet. It's the only one we have! When we find
                            a new one, then we can trash this one.
                            </Card.Text>
                        </Card.Body>
                    </SecondButton>
                </Card>
                <Card id="card-group">
                    <SecondButton>
                        <Card.Body>
                            <Card.Img variant="top" src={recycle} />
                            <Card.Title id="card-title">React</Card.Title>
                            <Card.Text id="card-text">
                            Through our immersive, state of the art game, you'll learn how to be a good person.
                        </Card.Text>
                        </Card.Body>
                    </SecondButton>
                </Card>
            </CardGroup>
        );
    }
}

export default MainCardGroup;