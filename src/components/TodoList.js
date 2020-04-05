import React, { useReducer, useState } from 'react';
import { v4 as id } from 'uuid';
import DateTimePicker from 'react-datetime-picker';

import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const addTodo = (e) => {
    e.preventDefault();

    if (state.itemInput.length > 0) {
      dispatch({
        type: 'addTodo',
        payload: { dueDate },
      });
      dispatch({
        type: 'todo input',
        payload: { input: '' },
      });
    }
  };

  const toggleTodo = React.useCallback(
    (id, time) => {
      dispatch({
        type: 'toggleCompleted',
        payload: { id, time },
      });
    },
    [dispatch]
  );

  const clearCompleted = () => dispatch({ type: 'clearCompleted' });

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
