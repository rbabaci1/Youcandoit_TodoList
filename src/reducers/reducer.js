import {
  updateLocalStorage,
  toggleLocalStorageItem,
  toggleIsDueStorageItems,
  clearCompletedStorageItems,
} from '../helpers';
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  SET_IS_DUE,
  CLEAR_COMPLETED,
} from '../actions';

const todoListReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { todoList: updateLocalStorage('todoList', payload) };
    case TOGGLE_COMPLETED:
      return {
        todoList: toggleLocalStorageItem(
          'todoList',
          payload.todoId,
          payload.completedDate
        ),
      };
    case SET_IS_DUE:
      return { todoList: toggleIsDueStorageItems('todoList', payload) };
    case CLEAR_COMPLETED:
      return { todoList: clearCompletedStorageItems('todoList') };
    default:
      return state;
  }
};

export { todoListReducer };
