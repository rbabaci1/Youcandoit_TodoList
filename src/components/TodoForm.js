import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { getLocalDate, setInitialStorage } from '../helpers/helpers';

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

    addTodo(userInput, getLocalDate(dueDate));
    setUserInput('');
    setDueDate(new Date());
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
    </form>
  );
});

export default TodoForm;
