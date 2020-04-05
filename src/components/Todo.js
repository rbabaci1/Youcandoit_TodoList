import React from 'react';
import now from 'moment';

export default function Todo({ todo, toggleTodo }) {
  return (
    <section
      onClick={() => toggleTodo(todo.id, now().format('MMMM Do YYYY @ h:mm a'))}
    >
      <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>
      {console.log('render in Todo')}

      <span>{todo.time}</span>

      <span id='due-message'>{todo.isDue && 'Pass due date!!!'}</span>
    </section>
  );
}
