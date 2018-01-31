import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.Component'
import Home from './Home/Home.Component'
import Report from './Report/Report.Component'
import Chart from './Chart/Chart.Component'
import Chat from './chatBot/Chat'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
         <div>
         <Header></Header>
          <Switch>
            <Route exact  path="/" component={Home}/>
            <Route exact path="/report" component={Report}/>
            <Route exact path="/chart/:name" component={Chart}/>
            <Route exact path="/chat" component={Chat}/>
          </Switch>
         </div>
        </Router>
      </div>
    );
  }
}

export default App;
