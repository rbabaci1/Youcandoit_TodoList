import { v4 as id } from 'uuid';
import {
  getLocalDate,
  setInitialStorage,
  updateLocalStorage,
  toggleLocalStorageItem,
  toggleIsDueStorageItems,
  clearCompletedStorageItems,
} from '../helpers/helpers';

const initialList = [
  {
    item: 'Learn about reducers',
    completed: false,
    dueDate: getLocalDate(new Date()),
    isDue: true,
    id: id(),
  },
];

const initialState = {
  todoList: setInitialStorage('todoList', initialList),
};

const todoListReducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addTodo': {
      return { todoList: updateLocalStorage('todoList', payload) };
    }
    case 'mark todo completed': {
      return {
        todoList: toggleLocalStorageItem(
          'todoList',
          payload.todoId,
          payload.completedDate
        ),
      };
    }
    case 'toggle is due': {
      return { todoList: toggleIsDueStorageItems('todoList', payload.todoId) };
    }
    case 'clear completed items': {
      return { todoList: clearCompletedStorageItems('todoList') };
    }
    default:
      return currentState;
  }
};

export { initialState, todoListReducer };
