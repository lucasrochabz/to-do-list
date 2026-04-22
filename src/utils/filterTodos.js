export const filterTodos = (todos, filter, search) => {
  return todos
    .filter((todo) => {
      if (filter === 'Done') return todo.isCompleted;
      if (filter === 'To-do') return !todo.isCompleted;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
};
