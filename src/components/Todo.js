import React, { useState, useEffect } from 'react';
import now from 'moment';
import { getLocalTime } from '../reducers/reducer';

export default function Todo({ todo, toggleTodo }) {
  const [currentTime, setCurrentTime] = useState(getLocalTime(new Date()));

  useEffect(() => {
    let id = setInterval(() => {
      setCurrentTime(getLocalTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, [currentTime]);

  return (
    <section
      onClick={() => toggleTodo(todo.id, now().format('MMMM Do YYYY @ h:mm a'))}
    >
      <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>

      <span>{todo.time}</span>

      <span id='due-message'>
        {/* {todo.dueDate === currentTime && !todo.completed && 'Pass due date!!!'} */}
        {todo.dueDate === currentTime && 'Pass due date!!!'}
      </span>
    </section>
  );
}
