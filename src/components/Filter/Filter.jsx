import './Filter.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <section className="filter">
      <h2>Filtrar:</h2>

      <div className="filter-options">
        <div>
          <p>Status:</p>

          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>

        <div>
          <p>Ordem alfabética:</p>

          <button onClick={() => setSort('Asc')}>Crescente</button>
          <button onClick={() => setSort('Desc')}>Decrescente</button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
