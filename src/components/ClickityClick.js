// Code ClickityClick Component Here

import React, {Component} from 'react';

export default class  ClickityClick extends Component{

    constructor(){
        super()

        this.state ={
            hasBeenClicked: false //initial state
        }

    }

    handleClick = () => {
        //console.log("okay");
        this.setState({
            hasBeenClicked: true
          })
    }
    render() {
        return (
          <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
          </div>
        );
      }
}
