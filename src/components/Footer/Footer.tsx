import { NavLink, NavLinkProps } from 'react-router-dom';
import { SquareCheck, Trash2 } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import styles from './Footer.module.css';

const Footer = () => {
  const getNavClass: NavLinkProps['className'] = ({ isActive }) => {
    return `${styles.link} ${isActive ? styles.active : ''}`;
  };

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav} aria-label="Navegação do rodapé">
        <NavLink to={ROUTES.HOME} className={getNavClass}>
          <SquareCheck />
          <span>Tarefas</span>
        </NavLink>

        <NavLink to={ROUTES.TRASH} className={getNavClass}>
          <Trash2 />
          <span>Lixeira</span>
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
