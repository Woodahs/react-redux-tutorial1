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
    const {props: {sum, onSum}, state: {a, b}} = this;
    return (
      <div>
        <label>
          a:
          <input onChange={(e) => {
            this.setState({a: +e.target.value})
          }} value={a} type="text"/>
        </label>
        <label>
          b:
          <input onChange={(e) => {
            this.setState({b: +e.target.value})
          }} value={b} type="text"/>
        </label>
        <label>
          sum:
          <input readOnly="readOnly" value={sum} type="text"/>
        </label>
        <button onClick={() => {
          onSum(a, b)
        }}>add
        </button>
      </div>
    )
  }
}
