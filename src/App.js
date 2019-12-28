import React from 'react';
import {
  Route,
  Switch,
} from "react-router";

import {
  BrowserRouter as Router
} from "react-router-dom";

import {Dashboard} from "./layouts"

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>

          <Route
            path="/"
            component={Dashboard}
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
