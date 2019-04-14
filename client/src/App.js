import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import List from './pages/List';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/list" component={List} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
