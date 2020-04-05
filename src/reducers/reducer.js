import { v4 as id } from 'uuid';

const initialState = {
  itemInput: '',
  todoList: [
    {
      item: 'Learn about reducers',
      completed: false,
      dueDate: 'none',
      isDue: false,
      id: id(),
    },
  ],
};
const getLocalDate = (date) => {
  return [
    date.toLocaleDateString(),
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  ].join(' ');
};

const reducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'update user input': {
      return {
        ...currentState,
        itemInput: payload.input,
      };
    }
    case 'addTodo': {
      return {
        todoList: [
          ...currentState.todoList,
          {
            item: currentState.itemInput,
            completed: false,
            dueDate: getLocalDate(payload.dueDate),
            isDue: false,
            id: id(),
          },
        ],
      };
    }
    case 'mark todo completed': {
      return {
        ...currentState,
        todoList: currentState.todoList.map((todo) => {
          if (todo.id === payload.todoId) {
            return {
              ...todo,
              completed: !todo.completed,
              completedDate: !todo.completed
                ? `on ${payload.completedDate}`
                : '',
            };
          }
          return todo;
        }),
      };
    }
    case 'clear completed todos': {
      return {
        ...currentState,
        todoList: currentState.todoList.filter((todo) => !todo.completed),
      };
    }
    case 'check due date': {
      return {
        ...currentState,
        todoList: currentState.todoList.map((todo) => {
          if (todo.dueDate === payload.currDate && todo.isDue === false) {
            return { ...todo, isDue: true };
          }
          return todo;
        }),
      };
    }
    default:
      return { itemInput: '', todoList: currentState.todoList };
  }
};

export { reducer, initialState, getLocalDate };
