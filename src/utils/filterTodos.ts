import { TodoType } from '@/types/todo';
import { TodoFilter } from '@/constants/todoFilter';

export const filterTodos = (
  todos: TodoType[],
  filter: TodoFilter,
  search: string,
) => {
  return todos
    .filter((todo) => {
      if (filter === 'Done') return todo.isCompleted;
      if (filter === 'Todo') return !todo.isCompleted;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
};
