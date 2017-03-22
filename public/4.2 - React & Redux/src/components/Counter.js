import React, {Component} from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div>
        Clicked: <span>{this.props.count.result}</span> times
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    )
  }
}
