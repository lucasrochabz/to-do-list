import { createContext } from 'react';
import { TodoType } from '@/types/todo';

export type TodoContextType = {
  todos: TodoType[];
  trash: TodoType[];

  addTodo: (text: string) => void;
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  restoreTodo: (id: string) => void;
  deleteForever: (id: string) => void;
  clearTrash: () => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);
