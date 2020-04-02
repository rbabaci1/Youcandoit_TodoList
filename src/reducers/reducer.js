import { v4 as id } from 'uuid';

const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: id()
  }
];

const ADD = 'ADD';

const reducer = (currentState, action) => {
  return currentState;
};

export { reducer, initialState };
