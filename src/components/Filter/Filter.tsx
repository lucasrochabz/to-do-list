import { FILTER_OPTIONS, FilterType } from '@/constants/todoFilters';
import { Button } from '@/components/Button';
import styles from './Filter.module.css';

type FilterProps = {
  filter: FilterType;
  setFilter: (value: FilterType) => void;
  totalTasks: number;
  completedTasks: number;
};

const Filter = ({
  filter,
  setFilter,
  totalTasks,
  completedTasks,
}: FilterProps) => {
  return (
    <section className={styles.filter}>
      <nav>
        {FILTER_OPTIONS.map(({ label, value }) => (
          <Button
            key={value}
            variant={filter === value ? 'active' : 'disabled'}
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
