import React, {Component} from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.decrease = this.decrease.bind(this);
  }

  decrease() {
    this.setState({count: this.state.count - 1});
    this.props.updateDescribe('Click "randomImages" button');
  }

  render() {
    return (
      <div>
        Clicked: <span>{this.state.count}</span> times
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}
