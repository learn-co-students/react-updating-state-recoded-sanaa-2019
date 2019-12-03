// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super()
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setState({
            handleClick: true
        }, () => console.log(this.state.hasBeenClicked))
        // this is copnsole.log for the state in that time 
    }
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'}</p>
                <button onClick={this.handleClick}>BUTTON</button>
            </div>
        )
    }
}

