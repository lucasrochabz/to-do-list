export const filterTodos = (todos, filter, search) => {
  return todos
    .filter((todo) => {
      if (filter === 'Completed') return todo.isCompleted;
      if (filter === 'Incomplete') return !todo.isCompleted;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
};
