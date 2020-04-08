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

const todoListReducer = (currentState, { type, payload }) => {
  switch (type) {
    case 'ADD_TODO': {
      return { todoList: updateLocalStorage('todoList', payload) };
    }
    case 'TOGGLE_COMPLETED': {
      return {
        todoList: toggleLocalStorageItem(
          'todoList',
          payload.todoId,
          payload.completedDate
        ),
      };
    }
    case 'SET_IS_DUE_TRUE': {
      return { todoList: toggleIsDueStorageItems('todoList', payload) };
    }
    case 'CLEAR_COMPLETED_ITEMS': {
      return { todoList: clearCompletedStorageItems('todoList') };
    }
    default:
      return currentState;
  }
};

export { initialState, todoListReducer };
