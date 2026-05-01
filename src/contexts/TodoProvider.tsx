import { ReactNode, useEffect, useState } from 'react';
import { TodoType } from '@/types/todo';
import { STORAGE_KEYS } from '@/constants/storageKeys';
import { mockTodos } from '@/mocks/todos';
import { TodoContext, TodoContextType } from './TodoContext';

// fix: add useMemo no value
// fix: add useCallback nas actions
// fix: observar o JSON.parse()... pois pode quebrar tipagem
type TodoProviderProps = {
  children: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TODOS);
    return stored ? JSON.parse(stored) : mockTodos;
  });

  const [trash, setTrash] = useState<TodoType[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TRASH);
    return stored ? JSON.parse(stored) : [];
  });

  const addTodo = (text: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const completeTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const removeTodo = (id: string) => {
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (!todoToRemove) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setTrash((prev) => [...prev, todoToRemove]);
  };

  const restoreTodo = (id: string) => {
    const todo = trash.find((item) => item.id === id);
    if (!todo) return;

    setTrash((prev) => prev.filter((item) => item.id !== id));
    setTodos((prev) => [...prev, todo]);
  };

  const deleteForever = (id: string) => {
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

  const value: TodoContextType = {
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
