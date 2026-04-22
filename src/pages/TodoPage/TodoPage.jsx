import { useState } from 'react';
import { useTodo } from '@/contexts/useTodo';
import { filterTodos } from '@/utils/filterTodos';
import { TodoForm } from '@/components/TodoForm';
import { Search } from '@/components/Search';
import { Filter } from '@/components/Filter';
import { EmptyState } from '@/components/EmptyState';
import { TodoList } from '@/components/TodoList';

const TodoPage = () => {
  const { todos, addTodo, completeTodo, removeTodo } = useTodo();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTodos = filterTodos(todos, filter, search);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

  let content;
  if (!todos.length) content = <EmptyState message="Lista de tarefas vazia." />;
  else {
    content = (
      <TodoList
        todos={filteredTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    );
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />

      <Filter
        filter={filter}
        setFilter={setFilter}
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />

      {content}
    </>
  );
};

export default TodoPage;
