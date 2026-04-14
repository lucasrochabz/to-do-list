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

  const tasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );

    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos];
    const filteredTodos = updatedTodos.filter((todo) =>
      todo.id !== id ? todo : null,
    );

    setTodos(filteredTodos);
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'Completed') return todo.isCompleted;
      if (filter === 'Incomplete') return !todo.isCompleted;
      return true;
    })
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));

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
