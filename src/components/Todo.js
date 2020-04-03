import React from 'react';
import now from 'moment';

export default function Todo({ todo, toggleTodo }) {
  return (
    <section>
      <li
        className={todo.completed ? 'completed' : ''}
        onClick={() =>
          toggleTodo(todo.id, now().format('MMMM Do YYYY @ h:mm a'))
        }
      >
        {todo.item}
      </li>

      <span>{todo.time}</span>
    </section>
  );
}
