import React, {Component} from 'react';
import Counter from '../containers/Counter';
import Sum from '../containers/Sum';
import RandomImages from '../containers/RandomImages';

export default class Examples extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <Sum/>
        <RandomImages/>
      </div>
    )
  }
}
