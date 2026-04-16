import { NavLink } from 'react-router-dom';
import { SquareCheck, Trash } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const getNavClass = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.active : ''}`;
  };

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label="Navegação do rodapé">
        <NavLink to="/" className={getNavClass}>
          <SquareCheck />
          <span>Tarefas</span>
        </NavLink>

        <NavLink to="/bin" className={getNavClass}>
          <Trash />
          <span>Lixeira</span>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
