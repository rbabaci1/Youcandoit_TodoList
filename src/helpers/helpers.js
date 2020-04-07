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
  const data = getStorageData(key);

  if (data) return data;

  localStorage.setItem(key, JSON.stringify(initialValue));
  return initialValue;
};

const updateLocalStorage = (key, newItem) => {
  const data = getStorageData(key);
  data.push(newItem);

  localStorage.setItem(key, JSON.stringify(data));
};

const toggleLocalStorageItem = (key, todoId, completedDate) => {
  const todoList = getStorageData(key);

  todoList.forEach((todo) => {
    if (todo.id === todoId) {
      todo.completed = !todo.completed;
      todo.completedDate = completedDate;
      return;
    }
  });

  localStorage.setItem(key, JSON.stringify(todoList));
};

const clearCompletedStorageItems = (key) => {
  const todoList = getStorageData(key);
  const notCompletedList = todoList.filter((todo) => !todo.completed);

  localStorage.setItem(key, JSON.stringify(notCompletedList));
};

const toggleIsDueStorageItems = (key, itemId) => {
  const todoList = getStorageData(key);

  todoList.forEach((todo) => {
    if (todo.id === itemId) {
      todo.isDue = true;
      return;
    }
  });

  localStorage.setItem(key, JSON.stringify(todoList));
};

export {
  getLocalDate,
  checkIfThereIsACompletedTodo,
  setInitialStorage,
  updateLocalStorage,
  getStorageData,
  toggleLocalStorageItem,
  clearCompletedStorageItems,
  toggleIsDueStorageItems,
};
