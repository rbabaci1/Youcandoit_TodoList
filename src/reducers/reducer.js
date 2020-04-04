import { v4 as id } from 'uuid';

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    dueDate: 'none',
    id: id(),
  },
];
const getLocalTime = (date) => {
  return [
    date.toLocaleDateString(),
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  ].join(' ');
};

const reducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addTodo': {
      return [
        ...currentState,
        {
          item: payload.input,
          completed: false,
          dueDate: getLocalTime(payload.dueDate),
          id: id(),
        },
      ];
    }
    case 'toggleCompleted': {
      return currentState.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed: !todo.completed,
            time: !todo.completed ? `Completed on ${payload.time}` : '',
          };
        }
        return todo;
      });
    }
    case 'clearCompleted': {
      return currentState.filter((todo) => !todo.completed);
    }
    default:
      return currentState;
  }
};

export { reducer, initialState, getLocalTime };
