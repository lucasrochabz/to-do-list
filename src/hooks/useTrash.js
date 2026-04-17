import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '@/constants/storageKeys';

// fix: acho que é melhor fazer um context TrashProvider
export const useTrash = () => {
  const [trash, setTrash] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.TRASH);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRASH, JSON.stringify(trash));
  }, [trash]);

  const addToTrash = (todo) => {
    setTrash((prev) => [...prev, todo]);
  };

  const restoreTodo = (id) => {
    const todo = trash.find((item) => item.id === id);

    setTrash((prev) => prev.filter((item) => item.id !== id));

    return todo;
  };

  const deleteForever = (id) => {
    setTrash((prev) => prev.filter((item) => item.id !== id));
  };

  const clearTrash = () => {
    setTrash([]);
  };

  return {
    trash,
    addToTrash,
    restoreTodo,
    deleteForever,
    clearTrash,
  };
};
