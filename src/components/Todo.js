import React from 'react';

export default function Todo({ todo, toggleTodo }) {
  return (
    <li
      className={todo.completed ? 'completed' : ''}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.item}
    </li>
  );
}
