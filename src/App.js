import React, { useReducer } from 'react';
import { v4 as id } from 'uuid';

import { todoListReducer, initialState } from './reducers/reducer';
import {
  checkIfThereIsACompletedTodo,
  updateLocalStorage,
  toggleLocalStorageItem,
  clearCompletedStorageItems,
  toggleIsDueStorageItems,
} from './helpers/helpers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  const addTodo = (item, dueDate) => {
    updateLocalStorage('todoList', {
      item,
      completed: false,
      dueDate,
      isDue: false,
      id: id(),
    });

    dispatch({
      type: 'addTodo',
    });
  };

  const toggleTodo = (todoId, completedDate) => {
    toggleLocalStorageItem('todoList', todoId, completedDate);

    dispatch({
      type: 'mark todo completed',
    });
  };

  const toggleIsDue = (todoId) => {
    toggleIsDueStorageItems('todoList', todoId);
    dispatch({
      type: 'toggle is due',
    });
  };

  const clearCompleted = () => {
    clearCompletedStorageItems('todoList');
    dispatch({ type: 'clear completed items' });
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
