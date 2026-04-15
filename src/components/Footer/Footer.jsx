import { SquareCheck, Trash } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <nav className={styles.footer}>
        {/* fix: colocar Link do react */}
        <div className={styles.nav}>
          <SquareCheck />
          <h3>Tarefas</h3>
        </div>

        <div className={styles.nav}>
          <Trash />
          <h3>Lixeira</h3>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
