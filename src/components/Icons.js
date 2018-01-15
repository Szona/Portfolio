import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Mail } from 'react-feather';
import { Github } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Codepen } from 'react-feather';

class Icons extends React.Component {
  render() {
    return (
      <ul className='contact-icons'>
        <li className='github'><a href="https://github.com/Szona" target="_blank" rel="noopener noreferrer"><Github color="white" size="20"/></a></li>
        <li className='linkedin'><a href="https://www.linkedin.com/in/alicja-cmiel/" target="_blank" rel="noopener noreferrer"><Linkedin color="white" size="20"/></a></li>
        <li className='codepen'><a href="https://codepen.io/Szona/" target="_blank" rel="noopener noreferrer"><Codepen color="white" size="20"/></a></li>
        <li className='mail'><a href="mailto:alicjacmiel@gamil.com"><Mail color="white" size="20"/></a></li>
      </ul>
    );
  }
}

export default Icons;
