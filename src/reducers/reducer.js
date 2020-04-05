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
const getLocalTime = (date) => {
  return [
    date.toLocaleDateString(),
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  ].join(' ');
};

const reducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'todo input': {
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
            dueDate: getLocalTime(payload.dueDate),
            isDue: false,
            id: id(),
          },
        ],
      };
    }
    case 'toggleCompleted': {
      return {
        ...currentState,
        todoList: currentState.todoList.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
              time: !todo.completed ? `Completed on ${payload.time}` : '',
            };
          }
          return todo;
        }),
      };
    }
    case 'clearCompleted': {
      return {
        ...currentState,
        todoList: currentState.todoList.filter((todo) => !todo.completed),
      };
    }
    default:
      return { itemInput: '', todoList: currentState.todoList };
  }
};

export { reducer, initialState, getLocalTime };
