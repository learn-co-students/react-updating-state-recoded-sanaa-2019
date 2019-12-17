import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    this.state = {
        theme: 'blue',
        addressInfo: {
          street: null,
          number: null,
          city: null,
          country: null
        },
    };
  }

  handleClick = () => {
    his.setState({
        addressInfo: {
          ...this.state.addressInfo,
          city: 'New York City'
        }
      });
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
