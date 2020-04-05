import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { getLocalDate } from '../helpers/helpers';

const TodoForm = React.memo(({ addTodo }) => {
  const [userInput, setUserInput] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(userInput, getLocalDate(dueDate));
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
    </form>
  );
});

export default TodoForm;
