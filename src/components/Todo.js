import React, { useState, useEffect } from 'react';
import now from 'moment';
import { getLocalTime } from '../reducers/reducer';

export default function Todo({ todo, toggleTodo }) {
  const [currentDate, setCurrentDate] = useState(getLocalTime(new Date()));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(getLocalTime(new Date()));

      return () => clearInterval(intervalID);
    }, 1000);
  }, [currentDate]);

  return (
    <section
      onClick={() => toggleTodo(todo.id, now().format('MMMM Do YYYY @ h:mm a'))}
    >
      <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>

      <span>{todo.time}</span>

      <span id='due-message'>
        {todo.dueDate === 'none' && !todo.completed && 'Pass due date!!!'}
      </span>
    </section>
  );
}
