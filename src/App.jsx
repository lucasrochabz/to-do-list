import { useState } from 'react';
import { Search } from '@/components/Search';
import { Filter } from '@/components/Filter';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);
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

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        search={search}
        filter={filter}
        sort={sort}
      />

      <TodoForm addTodo={addTodo} />
    </main>
  );
};

export default App;
