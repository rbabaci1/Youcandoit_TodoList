import React, { useEffect, useReducer } from 'react';
import { dateReducer } from '../reducers/reducer';
import { getLocalDate } from '../helpers/helpers';
import Todo from './Todo';

export default function TodoList({ todoList, toggleTodo }) {
  const [currentDate, dispatch] = useReducer(
    dateReducer,
    getLocalDate(new Date())
  );

  useEffect(() => {
    let id = setInterval(() => {
      dispatch({
        type: 'update current date',
      });
    }, 1000);

    return () => clearInterval(id);
  });

  return (
    <div className='todo-list'>
      <ol>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            currentDate={currentDate}
          />
        ))}
      </ol>
    </div>
  );
}
