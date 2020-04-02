import { v4 as id } from 'uuid';

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: id()
  }
];

const reducer = (currentState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addTodo':
      return [...currentState, payload];
    default:
      return currentState;
  }
};

export { reducer, initialState };
