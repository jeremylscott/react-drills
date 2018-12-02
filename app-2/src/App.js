import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      TvShows: [
      'King of Queens', 
      'Seinfeld', 
      'Just Shoot Me',
      'Rules of Engagement', 
      'Daredevil', 
      'Breaking Bad'
      ]
    }
  }

  render() {

    let foodToDisplay = this.state.TvShows.map((element,index) => {
      return (<h2 key={index}>{element}</h2>
        )
    })
    
    return (
      <div className="App">
        {foodToDisplay}
      </div>
    );
  }
}



