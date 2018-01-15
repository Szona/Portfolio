import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import About from '../components/About';
import Projects from '../components/Projects';
import Header from '../components/Header';
import LinesDown from '../components/LinesDown';
import Icons from '../components/Icons';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      showLinesDown: true,
      showLinesUp: false,
      hideNav: true,
      hideInProjects: true
      }
    this.handleClick = this.handleClick.bind(this);
  };

   handleClick(e) {
    this.setState({
      showHeader: false,
      showLinesDown: false,
      showLinesUp: true,
      hideNav: false,
      hideInProjects: false
    });
  };

  refreshPage(){
    window.location.reload();
  }

  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
          <div className='home-page'>
            <div className='box'>
              {this.state.showLinesDown && <LinesDown />}
              <ul>
                <li><NavLink className="name" to="/" onClick={ this.refreshPage }>A</NavLink></li>
                {this.state.hideNav &&
                <MediaQuery query="(max-width: 599px)">
                  <li><NavLink className="open-about" to='/about' onClick={ this.handleClick }>about</NavLink></li>
                  <li><NavLink className="open-projects" to="/projects"  onClick={ this.handleClick }>projects</NavLink></li>
                </MediaQuery> }
                <MediaQuery query="(min-width: 600px)">
                  <li><NavLink className="open-about" to='/about' onClick={ this.handleClick }>about</NavLink></li>
                  <li><NavLink className="open-projects" to="/projects" onClick={ this.handleClick }>projects</NavLink></li>
                </MediaQuery>
              </ul>
              <Switch>
                <Route exact path='/about/' component = {About} />
                <Route path="/projects" component={Projects}/>
              </Switch>
              {this.state.showHeader && <Header />}
              {this.state.hideInProjects && <MediaQuery query="(max-width: 599px)">
                <Icons />
              </MediaQuery> }
              <MediaQuery query="(min-width: 600px)">
                <Icons />
              </MediaQuery>
              {this.state.hideInProjects && <MediaQuery query="(max-width: 599px)">
                <div className='copyright'>©2018 Alicja Ćmiel</div>
              </MediaQuery>}
              <MediaQuery query="(min-width: 600px)">
                <div className='copyright'>©2018 Alicja Ćmiel</div>
              </MediaQuery>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default HomePage;
