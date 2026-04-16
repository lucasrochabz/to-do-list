import styles from './Bin.module.css';

const Bin = () => {
  return (
    <>
      <h1 className={styles.title}>Lixeira</h1>

      <ul>
        <li>
          <p>Testando</p>
        </li>

        <li>
          <p>Teste</p>
        </li>

        <li>
          <p>Apagar esse</p>
        </li>
      </ul>
    </>
  );
};

export default Bin;
