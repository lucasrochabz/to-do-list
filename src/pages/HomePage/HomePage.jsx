import { useState } from 'react';
import { Todo } from '@/components/Todo';
import { TodoForm } from '@/components/TodoForm';
// import './HomePage.module.css';
import './HomePage.css';

const HomePage = () => {
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
    <>
      <section className="app">
        <h1>Lista de tarefas</h1>

        <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </section>
    </>
  );
};

export default HomePage;
