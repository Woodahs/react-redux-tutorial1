import React, {Component} from 'react';

export default class Counter extends Component {
  render() {
    const {count:{result}, onDecrement} = this.props;
    return (
      <div>
        Clicked: <span>{result}</span> times
        <button onClick={onDecrement}>-</button>
      </div>
    )
  }
}
