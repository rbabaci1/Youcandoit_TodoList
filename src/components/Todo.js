import React, { useEffect } from 'react';
import now from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { formatDate } from '../helpers';

// Notify the user that a todo is completed
const notifyCompleted = () => {
  toast.success('Todo completed!', {
    containerId: 'A',
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
    draggable: true,
    className: 'todo',
  });
};
// Notify the user that a todo is expired
const notifyDueDate = (todo) => {
  toast.warn(`Salut!!! it's time to ${todo}`, {
    containerId: 'C',
    autoClose: 7000,
    draggable: true,
    className: 'todo',
  });
};

const Todo = React.memo(({ todo, toggleTodo, toggleIsDue }) => {
  const completedDate = now().format('MMMM Do YYYY @ h:mm a');

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (
        formatDate(new Date()) === todo.dueDate ||
        formatDate(new Date()) > todo.dueDate
      ) {
        toggleIsDue(todo.id);
        notifyDueDate(todo.item);
        clearInterval(intervalId);
        return;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [todo.id, todo.item, todo.dueDate, toggleIsDue]);

  const handleClick = () => {
    toggleTodo(todo.id, completedDate);
    !todo.completed && notifyCompleted();
  };

  return (
    <>
      <section onClick={handleClick}>
        <li className={todo.completed ? 'completed' : ''}>{todo.item}</li>

        {todo.completed && (
          <span>
            <CheckCircleIcon />
            {`on ${todo.completedDate}`}
          </span>
        )}

        <span id='due-message'>
          {todo.isDue && !todo.completed && 'Due date expired!!!'}
        </span>
      </section>

      <ToastContainer enableMultiContainer containerId={'A'} />

      {!todo.completed && (
        <ToastContainer enableMultiContainer containerId={'C'} />
      )}
    </>
  );
});

export default Todo;
