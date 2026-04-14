import Button from '../Button/Button';
import styles from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <section className={styles.filter}>
      <Button
        variant={filter === 'All' ? 'active' : 'filterOptions'}
        value="All"
        onClick={(e) => setFilter(e.target.value)}
      >
        Todas
      </Button>

      <Button
        variant={filter === 'Completed' ? 'active' : 'filterOptions'}
        value="Completed"
        onClick={(e) => setFilter(e.target.value)}
      >
        Completas
      </Button>

      <Button
        variant={filter === 'Incomplete' ? 'active' : 'filterOptions'}
        value="Incomplete"
        onClick={(e) => setFilter(e.target.value)}
      >
        Incompletas
      </Button>
    </section>
  );
};

export default Filter;
