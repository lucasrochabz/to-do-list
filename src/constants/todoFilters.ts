export const TODO_FILTERS = {
  ALL: 'All',
  TODO: 'Todo',
  DONE: 'Done',
} as const;

export type FilterType = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];

type FilterOption = {
  label: string;
  value: FilterType;
};

export const FILTER_OPTIONS: FilterOption[] = [
  { label: 'Todas', value: TODO_FILTERS.ALL },
  { label: 'A fazer', value: TODO_FILTERS.TODO },
  { label: 'Feitas', value: TODO_FILTERS.DONE },
];
