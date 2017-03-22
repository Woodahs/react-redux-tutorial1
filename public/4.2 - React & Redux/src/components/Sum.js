import React, {Component} from 'react';

export default class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2
    };
  }

  render() {
    return (
      <div>
        <label>
          a:
          <input onChange={(e) => {this.setState({a: +e.target.value})}} value={this.state.a} type="text"/>
        </label>
        <label>
          b:
          <input onChange={(e) => {this.setState({b: +e.target.value})}} value={this.state.b} type="text"/>
        </label>
        <label>
          sum:
          <input readOnly="readOnly" value={this.props.sum} type="text"/>
        </label>
        <button onClick={() => {
          this.props.onSum(this.state.a, this.state.b)
        }}>add</button>
      </div>
    )
  }
}
