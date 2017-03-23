export default function images(state = {data: [], loading: 'Click "Random Images" button'}, action) {
  switch (action.type) {
    case 'SHOW_IMGUR_IMAGES':
      return {
        ...state,
        data: action.data,
        loading: "Is loaded"
      };
    case 'IMGUR_LOADING':
      return {
        ...state,
        loading: "Is loading..."
      };
    default:
      return state;
  }
}
