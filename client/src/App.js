import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
