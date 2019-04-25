import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          R<sup>3</sup>
        </h1>
        <Link to={"./list"}>
          <button>Test Button</button>
        </Link>
        <Link to={"./login"}>
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
