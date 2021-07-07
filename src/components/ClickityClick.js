// Code ClickityClick Component Here

import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    // Define the initial state:
    super();
    this.state = {
      hasBeenClicked: false
    };
  }
 
  
    // Update our state here...
 handleClick = () => {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      }
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
 
export default ClickityClick;
