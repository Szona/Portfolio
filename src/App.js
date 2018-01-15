import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"} >
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
