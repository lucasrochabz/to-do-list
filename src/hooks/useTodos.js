import { useState } from 'react';

export const useTodos = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const removeTodo = (id) => {
    const confimed = confirm('Deseja remover este item?');

    if (!confimed) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    completeTodo,
    removeTodo,
  };
};
