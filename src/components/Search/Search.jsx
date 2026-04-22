import styles from './Search.module.css';

const Search = ({ search, setSearch }) => {
  return (
    <section className={styles.search}>
      <h2>Pesquisar</h2>

      <input
        type="text"
        value={search}
        placeholder="Digite para pesquisar..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  );
};

export default Search;
