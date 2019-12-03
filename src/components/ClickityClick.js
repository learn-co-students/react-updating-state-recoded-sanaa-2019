// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false
    };
  }
 
  handleClick = () => {
    // Update our state here...
    this.setState(previousState=>{// use function to the setState to make the value changes 
        return {hasBeenClicked: !previousState.hasBeenClicked}
      }
      ,()=>console.log(this.state.hasBeenClicked))//with no function it was prints false
  };
 
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