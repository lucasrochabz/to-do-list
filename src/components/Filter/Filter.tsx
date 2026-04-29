import { TodoFilter, FilterItem } from '@/types/types';
import { Button } from '@/components/Button';
import styles from './Filter.module.css';

type FilterProps = {
  filter: TodoFilter;
  setFilter: (value: TodoFilter) => void;
  totalTasks: number;
  completedTasks: number;
};

const filters: FilterItem[] = [
  { label: 'Todas', value: 'All' },
  { label: 'A fazer', value: 'To-do' },
  { label: 'Feitas', value: 'Done' },
];

const Filter = ({
  filter,
  setFilter,
  totalTasks,
  completedTasks,
}: FilterProps) => {
  return (
    <section className={styles.filter}>
      <nav>
        {filters.map(({ label, value }) => (
          <Button
            key={value}
            variant={filter === value ? 'active' : 'filterOptions'}
            value={value}
            onClick={() => setFilter(value)}
          >
            {label}
          </Button>
        ))}
      </nav>

      <span>
        Tarefas: {completedTasks}/{totalTasks}
      </span>
    </section>
  );
};

export default Filter;
