import Button from '../Button/Button';
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
        <div>
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
        </div>

        <span>
          Tarefas: {completedTasks}/{tasks}
        </span>
      </section>
    </>
  );
};

export default Filter;
