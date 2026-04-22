import styles from './Search.module.css';

const Search = ({ search, setSearch }) => {
  return (
    <section className={styles.search}>
      <label htmlFor="search" className="sr-only">
        Buscar tarefas
      </label>

      <input
        type="search"
        id="search"
        name="search"
        value={search}
        placeholder="Procurar tarefas"
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
};

export default Search;
