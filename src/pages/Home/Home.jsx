import { useState } from 'react';
import { useTrash } from '@/hooks/useTrash';
import { useTodos } from '@/hooks/useTodos';
import { mockTodos } from '@/mocks/todos';
import { filterTodos } from '@/utils/filterTodos';
import { TodoForm } from '@/components/TodoForm';
import { Search } from '@/components/Search';
import { Filter } from '@/components/Filter';
import { TodoList } from '@/components/TodoList';
import styles from './Home.module.css';

const Home = () => {
  const { addToTrash } = useTrash();
  const { todos, addTodo, completeTodo, removeTodo } = useTodos(
    mockTodos,
    addToTrash,
  );

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTodos = filterTodos(todos, filter, search);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

  return (
    <>
      <h1 className={styles.title}>Suas tarefas</h1>

      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />

      <Filter
        filter={filter}
        setFilter={setFilter}
        totalTasks={totalTasks}
        completedTasks={completedTasks}
      />

      <TodoList
        todos={filteredTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
};

export default Home;
