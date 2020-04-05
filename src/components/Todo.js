import React, { useState, useEffect } from 'react';
import now from 'moment';
import { getLocalTime } from '../reducers/reducer';

export default function Todo({ todo, toggleTodo }) {
  return (
    <section
      onClick={() => toggleTodo(todo.id, now().format('MMMM Do YYYY @ h:mm a'))}
    >
      <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>
      {console.log('render in Todo')}

      <span>{todo.time}</span>

      {/* <span id='due-message'>
          {todo.dueDate === this.state.currentDate &&
            !todo.completed &&
            'Pass due date!!!'}
        </span> */}
    </section>
  );
}
