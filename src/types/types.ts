export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export type TodoFilter = 'All' | 'Done' | 'To-do';

export type FilterItem = {
  label: string;
  value: TodoFilter;
};
