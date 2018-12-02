import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: ['anson','jeff','phil','josh','dave','travis'],
      userText: ''
    }
  }

  textInput (text) {
    this.setState({userText: text})
  }


  render() {
    let friendList = this.state.friends.filter( (element,index) => {
      return element.includes(this.state.userText) 
    }).map( (element,index) => {
      return <h2 key={index}>{element}</h2>
    })
      

    return (
      <div className="App">
      <input onChange={(e) => this.textInput(e.target.value)} type='text'/>
      
        

        <br/>

        {friendList}

      </div>
    );
  }
}


