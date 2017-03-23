import React, {Component} from 'react';
import Counter from './Counter';
import Sum from './Sum';
import RandomImages from './RandomImages';

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
