import React, { useReducer, useCallback } from 'react';
import { v4 as id } from 'uuid';

import { todoListReducer, initialState } from './reducers/reducer';
import { checkIfThereIsACompletedTodo } from './helpers/helpers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, dispatch] = useReducer(todoListReducer, initialState);

  const addTodo = useCallback(
    (item, dueDate) => {
      dispatch({
        type: 'addTodo',
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
        type: 'mark todo completed',
        payload: { todoId, completedDate },
      });
    },
    [dispatch]
  );

  const toggleIsDue = useCallback(
    (todoId) => {
      dispatch({
        type: 'toggle is due',
        payload: { todoId },
      });
    },
    [dispatch]
  );

  const clearCompleted = () => dispatch({ type: 'clear completed todos' });

  return (
    <div className='App'>
      <h1>todo list</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        toggleIsDue={toggleIsDue}
      />

      <button
        className='clear-btn'
        onClick={clearCompleted}
        disabled={!checkIfThereIsACompletedTodo(todoList)}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
