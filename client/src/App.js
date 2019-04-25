import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Learn from "./pages/Learn";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

//Anto's Change
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { clearCurrentProfile } from "./actions/profileActions";

// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
