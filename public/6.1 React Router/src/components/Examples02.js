import React, {Component} from 'react';

export default class Examples02 extends Component {
  render() {
    return (
      <div>
        <h1>Examples 02</h1>
        Hello, {this.props.params.name || "world"}
      </div>
    )
  }
}
