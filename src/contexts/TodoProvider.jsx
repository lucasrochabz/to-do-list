import { useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { mockTodos } from '@/mocks/todos';
import { TodoContext } from './TodoContext';

// fix: conferir se está tudo certo
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TODOS);
    return stored ? JSON.parse(stored) : mockTodos;
  });

  const [trash, setTrash] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TRASH);
    return stored ? JSON.parse(stored) : [];
  });

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

  // move todo para lixeira
  const removeTodo = (id) => {
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (!todoToRemove) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    addToTrash(todoToRemove);
  };

  const addToTrash = (todo) => {
    setTrash((prev) => [...prev, todo]);
  };

  // remove lixo definitivamente
  const deleteForever = (id) => {
    setTrash((prev) => prev.filter((item) => item.id !== id));
  };

  // limpar lixeira inteira
  const clearTrash = () => {
    const confirmed = confirm('Deseja esvaziar a lixeira?');
    if (!confirmed) return;

    setTrash([]);
  };

  // move lixo para todos
  const restoreTodo = (id) => {
    const todo = trash.find((item) => item.id === id);

    setTrash((prev) => prev.filter((item) => item.id !== id));

    return todo;
  };

  const value = {
    todos,
    trash,
    addTodo,
    completeTodo,
    removeTodo,

    addToTrash,
    restoreTodo,
    deleteForever,
    clearTrash,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
