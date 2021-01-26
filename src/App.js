import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import Navigation from "./components/navigation/navigation-component";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Statistics from "./components/pages/Statistics";


import './styles/navigation.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/statistics" component={Statistics} />
          </Switch>
        </Router>
      </div>
    );
  }
}
