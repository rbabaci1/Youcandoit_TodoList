import { v4 as id } from 'uuid';
import { formatDate, setInitialStorage } from '../helpers';

const initialList = [
  {
    item: 'Learn about reducers',
    completed: false,
    dueDate: formatDate(new Date()),
    isDue: true,
    id: id(),
  },
];

export const initialState = {
  todoList: setInitialStorage('todoList', initialList),
};
