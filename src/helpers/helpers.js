const getLocalDate = (date) => {
  return [
    date.toLocaleDateString(),
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  ].join(' ');
};

const checkIfThereIsACompletedTodo = (todoList) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].completed) return true;
  }
  return false;
};

export { getLocalDate, checkIfThereIsACompletedTodo };
