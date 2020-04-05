import React, { useReducer, useState, useEffect } from 'react';
import { v4 as id } from 'uuid';
import DateTimePicker from 'react-datetime-picker';

import { reducer, initialState, getLocalDate } from '../reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currDate, setCurrDate] = useState(getLocalDate(new Date()));
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setCurrDate(getLocalDate(new Date()));
    }, 1000);

    dispatch({
      type: 'check due date',
      payload: { currDate },
    });

    return () => clearInterval(id);
  }, [currDate]);

  const addTodo = (e) => {
    e.preventDefault();

    if (state.itemInput.length) {
      dispatch({
        type: 'addTodo',
        payload: { dueDate },
      });
      dispatch({
        type: 'update user input',
        payload: { input: '' },
      });
    }
  };

  const toggleTodo = (todoId, completedDate) => {
    dispatch({
      type: 'mark todo completed',
      payload: { todoId, completedDate },
    });
  };

  const clearCompleted = () => dispatch({ type: 'clear completed todos' });

  return (
    <div className='todo-list'>
      <h1>todo list</h1>
      {console.log('render in TodoList')}

      <form onSubmit={addTodo}>
        <label>
          Enter a Todo:
          <input
            type='text'
            value={state.itemInput}
            onChange={(e) =>
              dispatch({
                type: 'todo input',
                payload: { input: e.target.value },
              })
            }
          />
        </label>

        <button>Add</button>
        <div className='date-time'>
          Add a due date:
          <DateTimePicker onChange={(e) => setDueDate(e)} value={dueDate} />
        </div>
      </form>

      <ol>
        {state.todoList.map((todo) => (
          <Todo key={id()} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ol>

      <button className='clear-btn' onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}
