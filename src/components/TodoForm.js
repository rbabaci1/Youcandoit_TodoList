import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { formatDate, setInitialStorage } from '../helpers';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// notify the user that a todo is added
const notifyAdded = () => {
  toast.info('Todo added!', {
    containerId: 'B',
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1500,
    draggable: true,
    className: 'todo',
  });
};

const TodoForm = React.memo(({ addTodo }) => {
  const [userInput, setUserInput] = useState(
    setInitialStorage('userInput', '')
  );

  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem('userInput', JSON.stringify(userInput));
  }, [userInput]);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(userInput, formatDate(dueDate));
    notifyAdded();
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a Todo:
        <input
          type='text'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </label>

      <button disabled={!userInput}>Add</button>

      <div className='date-time'>
        Add a due date:
        <DateTimePicker onChange={(e) => setDueDate(e)} value={dueDate} />
      </div>

      <ToastContainer enableMultiContainer containerId={'B'} />
    </form>
  );
});

export default TodoForm;
