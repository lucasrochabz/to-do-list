import { Outlet, useLocation, useMatches } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const location = useLocation();

  const matches = useMatches();
  const currentRoute = matches[matches.length - 1];
  const title = currentRoute.handle?.title;

  return (
    <>
      <main key={location.pathname} className={`${styles.app} anim-slide-up`}>
        <h1 className={styles.title}>{title}</h1>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
