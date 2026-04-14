import { Button } from '@/components/Button';
import styles from './Filter.module.css';

const Filter = ({ filter, setFilter, todos }) => {
  const tasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.isCompleted).length;

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
              onClick={(e) => setFilter(e.target.value)}
            >
              {label}
            </Button>
          ))}
        </nav>

        <span>
          Tarefas: {completedTasks}/{tasks}
        </span>
      </section>
    </>
  );
};

export default Filter;
