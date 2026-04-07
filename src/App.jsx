import { useState } from 'react';
import { data } from '@/database/data';
import { Search } from '@/components/Search';
import { Filter } from '@/components/Filter';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(data);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <main className="app">
      <h1>Lista de tarefas</h1>
      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        search={search}
        filter={filter}
        sort={sort}
      />
    </main>
  );
};

export default App;
