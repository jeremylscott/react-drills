import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: ''
    }

  }

  onDom(text) {
    this.setState({userInput: text})
  }

  render() {
    return(
      <div className='App'>
        <input onChange={(e) => this.onDom(e.target.value)} type='text'
        placeholder='Type in me'/>
        <p>{this.state.userInput}</p>
      </div>

    )
  }
}
