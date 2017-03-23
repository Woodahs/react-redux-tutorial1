import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decrease} from '../redux/actions/index';

class Counter extends Component {
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

const CounterContainer = connect(
  (state) => ({
    count: state.count
  }),
  {
    onDecrement: decrease
  }
)(Counter);


export default CounterContainer;
