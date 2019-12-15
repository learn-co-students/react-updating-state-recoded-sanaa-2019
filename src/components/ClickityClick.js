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
        }
    )}
    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'}</p>
                <button onClick={this.handleClick}>Btn</button>
            </div>
        )
    }
}