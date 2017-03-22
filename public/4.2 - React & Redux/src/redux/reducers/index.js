import counter from './counter';
import sum from './sum';
import images from './images';

export default function combineReducer(currentState, action) { //REDUCER
  let nextState = {...currentState};

  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action),
    images: images(nextState.images, action)
  };

  return nextState;
}
