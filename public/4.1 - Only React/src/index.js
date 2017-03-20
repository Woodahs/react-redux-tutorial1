import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Sum from './components/Sum';
import RandomImages from './components/RandomImages';

const rootEl = document.getElementById('root');

class Describe extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div style={{color: 'red'}}>Describe: {this.props.describe}</div>
      </div>
    )
  }
}

class Examples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      describe: "none"
    };
    this.updateDescribe = this.updateDescribe.bind(this);
  }

  updateDescribe(describe) {
    this.setState({describe: describe});
  }

  render() {
    return (
      <div>
        <Describe describe={this.state.describe}/>
        <Counter updateDescribe={this.updateDescribe}/>
        <Sum sumDesc={this.updateDescribe}/>
        <RandomImages/>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  rootEl
);
