import React, { Component } from 'react';

type CheckBoxProps = {
  count: number;
}

type Props = Readonly<CheckBoxProps>;

export default class Checkbox extends Component<Props> {
  
  render() {
    const {count} = this.props;

    return (
      <>
        <label htmlFor='checkbox'>Чекни</label>
        <input type="checkbox" disabled={Boolean(count%2)}/>
      </>
    )
  }
}
  
  