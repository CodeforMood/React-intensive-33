import React, { Component } from 'react';

type CheckBoxProps = {
  text: string;
}

type Props = Readonly<CheckBoxProps>;

export default class Checkbox extends Component<Props> {
  
  render() {
    const {text} = this.props;

    return (
      <>
        <label htmlFor='checkbox'>Чекнуть</label>
        <input type="checkbox" disabled={text === 'реакт'}/>
      </>
    )
  }
}
  
  