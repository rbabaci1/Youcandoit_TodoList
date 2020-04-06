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

const getStorageData = (key) => JSON.parse(localStorage.getItem(key));

const setInitialStorage = (key, initialValue) => {
  localStorage.setItem(key, JSON.stringify(initialValue));

  return initialValue;
};

const updateLocalStorage = (key, newTodo) => {
  const todoList = getStorageData(key);
  todoList.push(newTodo);

  localStorage.setItem(key, JSON.stringify(todoList));

  return todoList;
};

export {
  getLocalDate,
  checkIfThereIsACompletedTodo,
  setInitialStorage,
  updateLocalStorage,
};
