import './App-style.css';
import React, { Component } from 'react';

type State = {
  count: number;
}

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    this.setState((prevState: State) => ({count: ++prevState.count}));
  }
  
  readonly state: State = {
    count: 0,
  };
  
  render() {
    return (
      <form className="form">
        <input className="form" value={this.state.count} />
        <button className="form" onClick={this._handleClick}>Increment</button>
      </form>
    );
  }
}

