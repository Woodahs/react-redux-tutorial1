function imgur(state = {data: [], loading: 'Click "Random Images" button'}, action) {
  switch (action.type) {
    case 'SHOW_IMGUR_IMAGES':
      return Object.assign({}, state, {
        data: action.data,
        loading: "Is loaded"
      });
    case 'IMGUR_LOADING':
      return Object.assign({}, state, {
        loading: "Is loading..."
      });
    default:
      return state;
  }
}
