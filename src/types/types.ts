export type TodoType = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TodoActions = {
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export type TrashActions = {
  restoreTodo: (id: string) => void;
  deleteForever: (id: string) => void;
};

export type TodoFilter = 'All' | 'Done' | 'To-do';

export type FilterItem = {
  label: string;
  value: TodoFilter;
};

export type VariantTypes = 'primary' | 'icon' | 'filterOptions' | 'active';
