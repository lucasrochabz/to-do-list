import styles from './Filter.module.css';

const Filter = ({ filter, setFilter }) => {
  return (
    <section className={styles.filter}>
      {/* <h2>Filtrar</h2> */}

      <div className={styles.filterOptions}>
        <div>
          <button
            className={filter === 'All' ? styles.active : ''}
            value="All"
            onClick={(e) => setFilter(e.target.value)}
          >
            Todas
          </button>

          <button
            className={filter === 'Completed' ? styles.active : ''}
            value="Completed"
            onClick={(e) => setFilter(e.target.value)}
          >
            Completas
          </button>

          <button
            className={filter === 'Incomplete' ? styles.active : ''}
            value="Incomplete"
            onClick={(e) => setFilter(e.target.value)}
          >
            Incompletas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
