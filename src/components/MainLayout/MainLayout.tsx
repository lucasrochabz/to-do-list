import { Outlet, UIMatch, useLocation, useMatches } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import styles from './MainLayout.module.css';

type RouteHandle = {
  title?: string;
};

const MainLayout = () => {
  const location = useLocation();

  const matches = useMatches() as UIMatch<unknown, RouteHandle>[];

  const currentRoute = matches[matches.length - 1];
  const title = currentRoute.handle?.title;

  return (
    <>
      <main key={location.pathname} className={`${styles.app} anim-slide-up`}>
        <h1 className="title">{title}</h1>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
