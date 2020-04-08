import React, { useReducer, useCallback } from 'react';
import { v4 as id } from 'uuid';

import { todoListReducer, initialState } from './reducers/reducer';
import { checkIfThereIsACompletedTodo } from './helpers/helpers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

// actions names
const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
const SET_IS_DUE_TRUE = 'SET_IS_DUE_TRUE';
const CLEAR_COMPLETED_ITEMS = 'CLEAR_COMPLETED_ITEMS';

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
      dispatch({
        type: SET_IS_DUE_TRUE,
        payload: todoId,
      });
    },
    [dispatch]
  );

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED_ITEMS });
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
