import { v4 as id } from 'uuid';

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: id()
  }
];

const reducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addTodo': {
      return [
        ...currentState,
        { item: payload.input, completed: false, id: id() }
      ];
    }
    case 'toggleCompleted': {
      return currentState.map(todo => {
        if (todo.id === payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    }
    default:
      return currentState;
  }
};

export { reducer, initialState };
