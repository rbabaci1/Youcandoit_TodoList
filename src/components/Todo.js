import React, { useEffect } from 'react';
import now from 'moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { getLocalDate } from '../helpers/helpers';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
  autoClose: 7000,
  draggable: true,
});

const notifyCompleted = () => {
  toast.success('Item completed!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

const Todo = React.memo(({ todo, toggleTodo, toggleIsDue }) => {
  const completedDate = now().format('MMMM Do YYYY @ h:mm a');

  const notifyDueDate = () => toast(`Salut!!! it's time to ${todo.item}`);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (
        getLocalDate(new Date()) === todo.dueDate ||
        getLocalDate(new Date()) > todo.dueDate
      ) {
        toggleIsDue(todo.id);
        notifyDueDate();
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [todo.id, todo.dueDate, toggleIsDue]);

  return (
    <section
      onClick={() => {
        toggleTodo(todo.id, completedDate);

        if (!todo.completed) notifyCompleted();
      }}
    >
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
