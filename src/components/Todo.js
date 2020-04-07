import React, { useEffect } from 'react';
import now from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { getLocalDate } from '../helpers/helpers';

const notifyCompleted = () => {
  toast.success('Item completed!', {
    containerId: 'A',
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    draggable: true,
    className: 'todo',
  });
};

const Todo = React.memo(({ todo, toggleTodo, toggleIsDue }) => {
  const completedDate = now().format('MMMM Do YYYY @ h:mm a');

  const notifyDueDate = () =>
    toast.warn(`Salut!!! it's time to ${todo.item}`, {
      containerId: 'C',
      autoClose: 7000,
      draggable: true,
      className: 'todo',
    });

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (
        getLocalDate(new Date()) === todo.dueDate ||
        getLocalDate(new Date()) > todo.dueDate
      ) {
        toggleIsDue(todo.id);
        notifyDueDate();
        clearInterval(intervalId);
        return;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    toggleTodo(todo.id, completedDate);
    if (!todo.completed) notifyCompleted();
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
