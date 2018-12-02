import React, {Component} from 'react'


export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            userName: '',
            password: ''
        }

    }

    handleName(name) {
        this.setState({userName: name})
    }

    handlePass(pass) {
        this.setState({password: pass})
    }

    handleClick() {
      return alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleName(e.target.value)} type='text'
                placeholder='Username'/>
                <input onChange={(e) => this.handlePass(e.target.value)} type='text'
                placeholder='Password'/>
                <button onClick={() => this.handleClick()}>Login</button>
            </div>
        )
    }





}


