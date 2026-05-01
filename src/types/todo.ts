export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TodoActions = {
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};
