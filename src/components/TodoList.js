import React, { useReducer, useState, useEffect } from 'react';
import { v4 as id } from 'uuid';

import { reducer, initialState, getLocalDate } from '../reducers/reducer';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currDate, setCurrDate] = useState(getLocalDate(new Date()));

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

  const addTodo = (userInput, dueDate) => {
    dispatch({
      type: 'addTodo',
      payload: { userInput, dueDate },
    });
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

      <TodoForm addTodo={addTodo} />

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
