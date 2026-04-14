import { useState } from 'react';
import { mockTodos } from '@/mocks/todos';
import { useTodos } from '@/hooks/useTodos';
import { filterTodos } from '@/utils/filterTodos';
import { TodoForm } from '@/components/TodoForm';
import { Search } from '@/components/Search';
import { Filter } from '@/components/Filter';
import { TodoList } from '@/components/TodoList';
import styles from './Home.module.css';

const Home = () => {
  const { todos, addTodo, completeTodo, removeTodo } = useTodos(mockTodos);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredTodos = filterTodos(todos, filter, search);

  const tasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>To-do list</h1>
      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />

      <Filter
        filter={filter}
        setFilter={setFilter}
        tasks={tasks}
        completedTasks={completedTasks}
      />

      <TodoList
        todos={filteredTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </main>
  );
};

export default Home;
