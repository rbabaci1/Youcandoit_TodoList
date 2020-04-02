import React, { useReducer, useState } from 'react';
import { v4 as id } from 'uuid';

import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [todoList, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');

  const addTodo = e => {
    e.preventDefault();

    dispatch({
      type: 'addTodo',
      payload: { input }
    });
    setInput('');
  };

  const toggleTodo = id => {
    dispatch({
      type: 'toggleCompleted',
      payload: { id }
    });
  };

  const clearCompleted = id => {
    dispatch({
      type: 'clearCompleted',
      payload: { id }
    });
  };

  return (
    <div className='todo-list'>
      <h1>todo list</h1>

      <form onSubmit={addTodo}>
        <label>
          Enter a Todo:
          <input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </label>

        <button>Add</button>
      </form>

      <ol>
        {todoList.map(todo => (
          <Todo key={id()} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ol>

      <button>Clear Completed</button>
    </div>
  );
}
