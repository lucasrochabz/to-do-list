export const TODO_FILTER = {
  ALL: 'All',
  TODO: 'Todo',
  DONE: 'Done',
} as const;

export type TodoFilter = (typeof TODO_FILTER)[keyof typeof TODO_FILTER];

export const FILTER_OPTIONS = [
  { label: 'Todas', value: TODO_FILTER.ALL },
  { label: 'A fazer', value: TODO_FILTER.TODO },
  { label: 'Feitas', value: TODO_FILTER.DONE },
];
