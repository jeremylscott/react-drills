import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            task: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(text) {
        this.setState({task: text})
      }

    handleClick() {
        this.props.addTask(this.state.task)
        this.setState({task: ''})
      }

    render() {
        return (
            <div>
                <input value={this.state.task} onChange={(e) => this.handleInput(e.target.value)} type='text'
                    placeholder='Enter new task'/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }








}