function sum (currentState = 0, action) {
  let nextState;

  switch (action.type) {
    case 'SUM':
      nextState = parseInt(action.a) + parseInt(action.b);
      return nextState;
    default:
      nextState = currentState;
      return currentState;
  }
}
