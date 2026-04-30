import { TodoFilter, TodoType } from '@/types/types';

export const filterTodos = (
  todos: TodoType[],
  filter: TodoFilter,
  search: string,
) => {
  return todos
    .filter((todo) => {
      if (filter === 'Done') return todo.isCompleted;
      if (filter === 'To-do') return !todo.isCompleted;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
};
