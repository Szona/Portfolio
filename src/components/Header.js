import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';


class Header extends React.Component {
  render() {
    return (
      <h1 className='title'>
        <span className='junior'>junior</span>
        <span className='fr'>front end</span>
        <span className='dev'> developer</span>
      </h1>
    );
  }
}

export default Header;
