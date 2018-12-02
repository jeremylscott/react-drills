import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      newTasks: '',
      taskArray: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(input) {
    this.setState({newTasks: input})
  }

  handleClick() {
    this.setState({
      taskArray: [...this.state.taskArray, this.state.newTasks],
      newTasks: ''
    })
  }

  render() {
    let list = this.state.taskArray.map( (element,index) => {
      return ( 
        <Todo key={index} task={element}/>
      )
    })

  console.log(this.handleClick)
    return ( 
      <div className="App">
        <h1><strong>My to-do list:</strong></h1>
        <input value={this.state.newTasks} 
            placeholder='Enter new task'
            onChange={(e) => this.handleChange(e.target.value)}/>
        
        <button onClick={this.handleClick}>Add</button>

        <br />

        {list}
      </div>
    );
  }
}


