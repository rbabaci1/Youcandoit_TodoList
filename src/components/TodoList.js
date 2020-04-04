import React, { useReducer, useState } from 'react';
import { v4 as id } from 'uuid';
import DateTimePicker from 'react-datetime-picker';

import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [todoList, dispatch] = useReducer(reducer, initialState);

  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const addTodo = (e) => {
    e.preventDefault();

    if (input.length > 0) {
      dispatch({
        type: 'addTodo',
        payload: { input, dueDate },
      });
      setInput('');
    }
  };

  const toggleTodo = (id, time) => {
    dispatch({
      type: 'toggleCompleted',
      payload: { id, time },
    });
  };

  const clearCompleted = () => dispatch({ type: 'clearCompleted' });

  const toggleDue = (id) => dispatch({ type: 'toggleDue', payload: { id } });

  return (
    <div className='todo-list'>
      <h1>todo list</h1>

      <form onSubmit={addTodo}>
        <label>
          Enter a Todo:
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>

        <button>Add</button>
        <div className='date-time'>
          Enter a due date:
          <DateTimePicker onChange={(e) => setDueDate(e)} value={dueDate} />
        </div>
      </form>

      <ol>
        {todoList.map((todo) => (
          <Todo key={id()} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ol>

      <button className='clear-btn' onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
