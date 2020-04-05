import React from 'react';
import now from 'moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function Todo({ todo, toggleTodo }) {
  const currentDate = now().format('MMMM Do YYYY @ h:mm a');

  return (
    <section onClick={() => toggleTodo(todo.id, currentDate)}>
      <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>
      {console.log('render in Todo')}

      {todo.completed && (
        <span>
          <CheckCircleIcon />
          {todo.completedDate}
        </span>
      )}

      <span id='due-message'>{todo.isDue && 'Due date expired!!!'}</span>
    </section>
  );
}
