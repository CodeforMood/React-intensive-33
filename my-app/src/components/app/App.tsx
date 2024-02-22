import Checkbox from '../checkbox/checkbox.tsx';
import './App-style.css';
import React, { ChangeEvent, Component, MouseEvent } from 'react';

type State = {
  count: number;
}

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleChange = this._handleChange.bind(this);
    console.log('constructor!')
  }
  
  readonly state: State = {
    count: 0,
  }

  _handleClick(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault()
    this.setState({
      count: +this.state.count + 1
    });
  }
  
  _handleChange(evt: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      count: evt.target.value,
    })
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps!')
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate? true!')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate!')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount!')
  }

  render() {
    console.log('render!')
    return (
      <form className="form">
        <input className="form__input" onChange={this._handleChange} value={this.state.count}/>
        <button className="form__button" onClick={this._handleClick}>Increment</button>
        <Checkbox count={this.state.count} />
      </form>
    );
  }
}

