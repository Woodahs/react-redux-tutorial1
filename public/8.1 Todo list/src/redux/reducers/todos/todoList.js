export default function todosList(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false
      };
      return [
        ...state,
        newTodo
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          completed: !todo.cmpleted
        });
      });
    default:
      return state;
  }
}
