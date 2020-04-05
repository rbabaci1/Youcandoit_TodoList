import React from 'react';

import Todo from './Todo';

export default function TodoList({ todoList, toggleTodo }) {
  return (
    <div className='todo-list'>
      <ol>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ol>
    </div>
  );
}
