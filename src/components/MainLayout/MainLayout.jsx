import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <main key={location.pathname} className={`${styles.app} anim-slide-up`}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
