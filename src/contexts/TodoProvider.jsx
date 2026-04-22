import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { mockTodos } from '@/mocks/todos';
import { TodoContext } from './TodoContext';

// fix: add useMemo no value
// fix: add useCallback nas actions
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

  const removeTodo = (id) => {
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (!todoToRemove) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setTrash((prev) => [...prev, todoToRemove]);
  };

  const restoreTodo = (id) => {
    const todo = trash.find((item) => item.id === id);
    if (!todo) return;

    setTrash((prev) => prev.filter((item) => item.id !== id));
    setTodos((prev) => [...prev, todo]);
  };

  const deleteForever = (id) => {
    setTrash((prev) => prev.filter((item) => item.id !== id));
  };

  const clearTrash = () => {
    const confirmed = confirm('Deseja esvaziar a lixeira?');
    if (!confirmed) return;

    setTrash([]);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRASH, JSON.stringify(trash));
  }, [trash]);

  const value = {
    todos,
    trash,
    addTodo,
    completeTodo,
    removeTodo,
    restoreTodo,
    deleteForever,
    clearTrash,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
