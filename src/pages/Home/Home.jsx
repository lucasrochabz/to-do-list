import { useState } from 'react';
import { mockTodos } from '@/mocks/todos';
import { TodoForm } from '@/components/TodoForm';
import { Search } from '@/components/Search';
import { Filter } from '@/components/Filter';
import { TodoList } from '@/components/TodoList';
import styles from './Home.module.css';

const Home = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <main className={styles.app}>
      <h1 className={styles.title}>To-do list</h1>
      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />

      <Filter filter={filter} setFilter={setFilter} todos={todos} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        search={search}
        filter={filter}
      />
    </main>
  );
};

export default Home;
