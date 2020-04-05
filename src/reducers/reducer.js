import { v4 as id } from 'uuid';
import { getLocalDate } from '../helpers/helpers';

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    dueDate: getLocalDate(new Date()),
    id: id(),
  },
];

const dateReducer = (state, action) => {
  const { type } = action;

  if (type === 'update current date') {
    return getLocalDate(new Date());
  }

  return state;
};

const todoListReducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addTodo': {
      return [...currentState, payload];
    }
    case 'mark todo completed': {
      return currentState.map((todo) => {
        if (todo.id !== payload.todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
          completedDate: !todo.completed ? `on ${payload.completedDate}` : '',
        };
      });
    }
    case 'clear completed todos': {
      return currentState.filter((todo) => !todo.completed);
    }

    default:
      return currentState;
  }
};

export { initialState, dateReducer, todoListReducer };
