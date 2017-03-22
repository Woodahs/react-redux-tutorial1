import React, {Component} from 'react';
import Counter from './Counter';
import Sum from './Sum';
import RandomImages from './RandomImages';

export default class Examples extends Component {
  render() {
    const {value: {count, sum, images}, onDecrement, onRandomImages, onSum} = this.props;
    return (
      <div>
        <Counter count={count} onDecrement={onDecrement}/>
        <Sum sum={sum} onSum={onSum}/>
        <RandomImages images={images} onRandomImages={onRandomImages}/>
      </div>
    )
  }
}
