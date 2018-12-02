import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image jeremy={'https://garrettyaworski.com/img/garrett.jpg'}/>
      </div>
    );
  }
}