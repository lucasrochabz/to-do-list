import { Button } from '@/components/Button';
import styles from './Filter.module.css';

const Filter = ({ filter, setFilter, totalTasks, completedTasks }) => {
  const filters = [
    { label: 'Todas', value: 'All' },
    { label: 'Completas', value: 'Completed' },
    { label: 'Incompletas', value: 'Incomplete' },
  ];

  return (
    <>
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
    </>
  );
};

export default Filter;
