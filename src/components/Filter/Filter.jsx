import styles from './Filter.module.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <section className={styles.filter}>
      <h2>Filtrar</h2>

      <div className={styles.filterOptions}>
        <div>
          <label htmlFor="status">Status:</label>

          <select
            id="status"
            name="status"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

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
