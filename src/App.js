import React, { useReducer, useCallback } from 'react';
import { v4 as id } from 'uuid';
import { todoListReducer } from './reducers/reducer';
import { initialState } from './initialState';
import { checkIfThereIsACompletedTodo } from './helpers';
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  SET_IS_DUE,
  CLEAR_COMPLETED,
} from './actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const addTodo = useCallback(
    (item, dueDate) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          item,
          completed: false,
          dueDate,
          isDue: false,
          id: id(),
        },
      });
    },
    [dispatch]
  );

  const toggleTodo = useCallback(
    (todoId, completedDate) => {
      dispatch({
        type: TOGGLE_COMPLETED,
        payload: { todoId, completedDate },
      });
    },
    [dispatch]
  );

  const toggleIsDue = useCallback(
    (todoId) => {
      dispatch({ type: SET_IS_DUE, payload: todoId });
    },
    [dispatch]
  );

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className='App'>
      <h1>todo list</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todoList={state.todoList}
        toggleTodo={toggleTodo}
        toggleIsDue={toggleIsDue}
      />

      <button
        className='clear-btn'
        onClick={clearCompleted}
        disabled={!checkIfThereIsACompletedTodo(state.todoList)}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
