import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path='/about/' component = {About} />
            <Route path="/projects" component={Projects}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
