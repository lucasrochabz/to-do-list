import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storageKeys';

export const useTodos = (initialTodos, addToTrash) => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TODOS);
    return stored ? JSON.parse(stored) : initialTodos;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
  }, [todos]);

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
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (!todoToRemove) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    addToTrash(todoToRemove);
  };

  return {
    todos,
    addTodo,
    completeTodo,
    removeTodo,
  };
};
