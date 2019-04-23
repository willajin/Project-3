// jumbotron component
import React from "react";
import "./index.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Learn to Reduce, Reuse, React</h1>
            <p className="lead">An educational resource to teach students the importance of recycling and how to do it through a fun, interactive game.</p>
        </div>
    );
}

export default Jumbotron;