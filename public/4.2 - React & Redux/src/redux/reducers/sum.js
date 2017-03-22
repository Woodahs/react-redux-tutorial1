export default function sum (currentState = 0, action) {
  let nextState;

  switch (action.type) {
    case 'SUM':
      nextState = parseInt(action.a, 10) + parseInt(action.b, 10);
      return nextState;
    default:
      nextState = currentState;
      return currentState;
  }
}
