import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Icons from './Icons';
import MediaQuery from 'react-responsive';

class About extends React.Component {
  render() {
    return (
        <div className='about'>
        <MediaQuery query="(max-width: 599px)">
          <Icons />
        </MediaQuery>
          <p>Hi, I am Alicja and I taught myself how to create websites. I would love to challenge myself and start to learn from the best. I hope to become frontend developer in near future and gain new experiences along the way.</p>
          <p className='skills'>I use comfortably:</p>
          <ul className='skills-list'>
            <li>HTML5,</li>
            <li>CSS3,</li>
            <li>vanilla JS,</li>
            <li>ES6,</li>
            <li>REACT,</li>
            <li>jQuery,</li>
            <li>SASS,</li>
            <li>GULP,</li>
            <li>NPM,</li>
            <li>SVG</li>
          </ul>
          <p>I am currently learning everything about REACT. </p>
        </div>
    );
  }
}

export default About;
