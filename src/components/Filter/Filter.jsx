import styles from './Filter.module.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <section className={styles.filter}>
      <h2>Filtrar</h2>

      <div className={styles.filterOptions}>
        <div>
          <label htmlFor="status">Status:</label>
          <button
            value="All"
            onClick={(e) => setFilter(e.target.value)}
            className={filter === 'All' ? styles.active : ''}
          >
            Todas
          </button>

          <button value="Completed" onClick={(e) => setFilter(e.target.value)}>
            Completas
          </button>

          <button value="Incomplete" onClick={(e) => setFilter(e.target.value)}>
            Incompletas
          </button>
        </div>

        {/* fix: isso ordenar não precisa */}
        <fieldset className={styles.sortOptions}>
          <legend>Ordem alfabética:</legend>

          <button onClick={() => setSort('Asc')}>Crescente</button>
          <button onClick={() => setSort('Desc')}>Decrescente</button>
        </fieldset>
      </div>
    </section>
  );
};

export default Filter;
