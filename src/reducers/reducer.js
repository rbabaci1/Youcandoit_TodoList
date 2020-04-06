import { v4 as id } from 'uuid';
import {
  getLocalDate,
  setInitialStorage,
  getStorageData,
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
  switch (action.type) {
    case 'addTodo': {
      return { todoList: getStorageData('todoList') };
    }
    case 'mark todo completed': {
      return { todoList: getStorageData('todoList') };
    }
    case 'clear completed items': {
      return { todoList: getStorageData('todoList') };
    }
    case 'toggle is due': {
      return { todoList: getStorageData('todoList') };
    }
    default:
      return currentState;
  }
};

export { initialState, todoListReducer };
