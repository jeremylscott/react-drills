import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'
import NewTask from './NewTask'
import Todo from './Todo'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task]})
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={this.handleAddTask}/>
        <List addList={this.state.list}/>
      </div>
    );
  }
}
