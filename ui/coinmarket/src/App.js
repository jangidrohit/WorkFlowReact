import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.Component'
import Home from './Home/Home.Component'
import Report from './Report/Report.Component'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
            <Route exact  path="/" component={Home}/>
            <Route exact path="/report" component={Report}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
