import React, { useReducer, useState } from 'react';
import { v4 as id } from 'uuid';

import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [todoList, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState('');

  const addTodo = todo => {
    dispatch({
      type: 'ADD',
      payload: {
        item: todo
      }
    });
  };

  return (
    <div className='todo-list'>
      <h1>todo list</h1>

      <form>
        <label>
          Enter a Todo:
          <input type='text' />
        </label>

        <button>Add</button>
      </form>

      <ol>
        {todoList.map(todo => (
          <Todo todo={todo} key={id()} />
        ))}
      </ol>
    </div>
  );
}
