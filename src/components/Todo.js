import React from 'react';
import now from 'moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { getLocalDate } from '../helpers/helpers';

const Todo = React.memo(({ todo, toggleTodo }) => {
  const completedDate = now().format('MMMM Do YYYY @ h:mm a');
  const [isDue, setIsDue] = React.useState(false);

  React.useEffect(() => {
    let intervalId = setInterval(() => {
      if (getLocalDate(new Date()) === todo.dueDate) {
        setIsDue(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [todo.dueDate]);

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
        {isDue && !todo.completed && 'Due date expired!!!'}
      </span>
    </section>
  );
});

export default Todo;
