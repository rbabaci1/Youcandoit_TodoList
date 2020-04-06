import { v4 as id } from 'uuid';
import { getLocalDate } from '../helpers/helpers';

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    dueDate: getLocalDate(new Date()),
    isDue: true,
    id: id(),
  },
];

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
    case 'toggle is due': {
      return currentState.map((todo) => {
        if (todo.id !== payload.todoId) return todo;

        return {
          ...todo,
          isDue: true,
        };
      });
    }

    default:
      return currentState;
  }
};

export { initialState, todoListReducer };
