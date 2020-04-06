import React, { useEffect } from 'react';
import now from 'moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { getLocalDate } from '../helpers/helpers';

const Todo = React.memo(({ todo, toggleTodo, toggleIsDue }) => {
  const completedDate = now().format('MMMM Do YYYY @ h:mm a');

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (
        getLocalDate(new Date()) === todo.dueDate ||
        getLocalDate(new Date()) > todo.dueDate
      ) {
        toggleIsDue(todo.id);
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [todo.id, todo.dueDate, toggleTodo, toggleIsDue]);

  return (
    <section onClick={() => toggleTodo(todo.id, completedDate)}>
      <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>

      {todo.completed && (
        <span>
          <CheckCircleIcon />
          {todo.completedDate}
        </span>
      )}

      <span id='due-message'>
        {todo.isDue && !todo.completed && 'Due date expired!!!'}
      </span>
    </section>
  );
});

export default Todo;
