import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Figcaption = (props) => {
  return (
    <figcaption>
      <h2>{props.title}</h2>
      <a href={props.url} target="_blank" rel="noopener noreferrer" className='link'>view</a>
    </figcaption>
  )
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
      }
    this.mouseHover= this.mouseHover.bind(this);
    this.onTouch= this.onTouch.bind(this);
  };

mouseHover(e) {
  this.setState(prevState => ({
      isHovering: !prevState.isHovering
    }));
}
onTouch(e) {
  this.setState({
    isHovering: true
  })
}

  render() {
    return (
      <div className='projects'>
        <div className='figures'>
          <figure></figure>

          <figure className='project' onTouchEnd={ this.onTouch}  onMouseEnter={ this.mouseHover } onMouseLeave={ this.mouseHover }>
            <span className="img1"></span>
            {this.state.isHovering && <Figcaption title='Sit On Chair' url="https://szona.github.io/Sit-on-Chair/" />}
          </figure>

          <figure className='project' onTouchEnd={ this.onTouch} onMouseEnter={ this.mouseHover } onMouseLeave={ this.mouseHover }>
            <span className="img2"></span>
            {this.state.isHovering && <Figcaption title='My Reads' url='https://szona.github.io/my-reads/' />}
          </figure>

          <figure className='project' onTouchEnd={ this.onTouch} onMouseEnter={ this.mouseHover } onMouseLeave={ this.mouseHover }>
            <span className="img3"></span>
            {this.state.isHovering && <Figcaption title='Panda Project' url='https://szona.github.io/PandaProject/' />}
          </figure>
        </div>
      </div>
    );
  }
}

export default Projects;
