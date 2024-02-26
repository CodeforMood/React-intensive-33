import Checkbox from '../checkbox/checkbox.tsx';
import List from '../list/list.tsx';
import './app-style.css';
import React, { ChangeEvent, Component, MouseEvent, createRef } from 'react';

type State = {
  text: string;
}

export default class App extends Component {
  inputRef: React.RefObject<HTMLInputElement>

  constructor(props: any) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleFocusBtnClick = this._handleFocusBtnClick.bind(this);
    this.inputRef = createRef<HTMLInputElement>();
    console.log('constructor!')
  }
  
  readonly state: State = {
    text: '',
  }

  _handleSubmit(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault()
  }
  
  _handleChange(evt: ChangeEvent<HTMLInputElement>): void {
    this.setState({
      text: evt.target.value
    })
  }

  _handleFocusBtnClick(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault()
    this.inputRef?.current?.focus();
  }

  _isDisabledSubmitButton() {
    return this.state.text === 'реакт'
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
      <>
        <form className="form">
          <input className="form__input" ref={this.inputRef} onChange={this._handleChange} value={this.state.text}/>
          <button className="form__submit-button" onClick={this._handleSubmit} disabled={this._isDisabledSubmitButton()} >Submit</button>
          <button className="form__focus-button" onClick={this._handleFocusBtnClick}>Focus</button>
          <Checkbox text={this.state.text} />
        </form>
        <List />
      </>
    );
  }
}

