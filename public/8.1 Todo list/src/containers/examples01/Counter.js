import {connect} from 'react-redux';
import {decrease} from '../../redux/actions/index';
import React, {Component} from 'react';

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

export default connect(
  (state) => ({
    count: state.examples.count
  }),
  {
    onDecrement: decrease
  }
)(Counter);
