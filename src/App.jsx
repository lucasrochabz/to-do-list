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

  const tasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

  const addTodo = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <main className="app">
      <h1 className="title">To-do list</h1>
      <TodoForm addTodo={addTodo} />

      <Search search={search} setSearch={setSearch} />

      <div className="testando">
        <Filter filter={filter} setFilter={setFilter} />

        <span>
          Tarefas: {completedTasks}/{tasks}
        </span>
      </div>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        search={search}
        filter={filter}
      />
    </main>
  );
};

export default App;
