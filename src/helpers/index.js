export const getStorageData = (key) => JSON.parse(localStorage.getItem(key));

export const formatDate = (date) => {
  return [
    date.toLocaleDateString(),
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  ].join(' ');
};

export const checkIfThereIsACompletedTodo = (todoList) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].completed) return true;
  }
  return false;
};

export const setInitialStorage = (key, initialValue) => {
  const data = getStorageData(key);

  if (data) return data;
  else {
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  }
};

export const updateLocalStorage = (key, newItem) => {
  const data = getStorageData(key);

  data.push(newItem);
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};

export const toggleLocalStorageItem = (key, todoId, completedDate) => {
  const todoList = getStorageData(key);

  todoList.forEach((todo) => {
    if (todo.id === todoId) {
      todo.completed = !todo.completed;
      todo.completedDate = completedDate;
      return;
    }
  });
  localStorage.setItem(key, JSON.stringify(todoList));

  return todoList;
};

export const toggleIsDueStorageItems = (key, itemId) => {
  const todoList = getStorageData(key);

  todoList.forEach((todo) => {
    if (todo.id === itemId) {
      todo.isDue = true;
      return;
    }
  });
  localStorage.setItem(key, JSON.stringify(todoList));

  return todoList;
};

export const clearCompletedStorageItems = (key) => {
  const todoList = getStorageData(key);
  const notCompletedList = todoList.filter((todo) => !todo.completed);

  localStorage.setItem(key, JSON.stringify(notCompletedList));
  return notCompletedList;
};
