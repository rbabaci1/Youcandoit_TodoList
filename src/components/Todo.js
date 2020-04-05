import React from 'react';
import now from 'moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const areEqual = (prevProps, nextProps) => {
  if (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.completed === nextProps.todo.completed &&
    nextProps.currentDate !== nextProps.todo.dueDate
  ) {
    return true;
  }

  return false;
};

const Todo = React.memo(({ todo, toggleTodo, currentDate }) => {
  const completedDate = now().format('MMMM Do YYYY @ h:mm a');

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
        {todo.dueDate === currentDate &&
          !todo.completed &&
          'Due date expired!!!'}
      </span>
    </section>
  );
});

export default React.memo(Todo, areEqual);
