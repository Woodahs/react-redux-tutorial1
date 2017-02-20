function imgur(currentState, action) {
  var DEFAULT_STATE = {
    data: [],
    loading: 'Click "Random Images" button'
  };
  var nextState = Object.assign({}, currentState);

  if (currentState === undefined) {
    nextState = DEFAULT_STATE;
    return nextState;
  }

  switch (action.type) {
    case 'SHOW_IMGUR_IMAGES':
      nextState.data = action.data;
      nextState.loading = "Is loaded";
      return nextState;
    case 'IMGUR_LOADING':
      nextState.loading = "Is loading...";
      return nextState;
    default:
      nextState = currentState;
      return currentState;
  }

  return nextState;
}
