import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increaseCount()}>Count</button>
      </div>
    );
  }
}

