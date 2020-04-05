import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(userInput, dueDate);
    setUserInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {console.log('render in TodoForm')}
      <label>
        Enter a Todo:
        <input
          type='text'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </label>

      <button>Add</button>
      <div className='date-time'>
        Add a due date:
        <DateTimePicker onChange={(e) => setDueDate(e)} value={dueDate} />
      </div>
    </form>
  );
};

export default TodoForm;
