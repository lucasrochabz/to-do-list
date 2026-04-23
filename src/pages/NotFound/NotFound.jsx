import { Link } from 'react-router-dom';
import notFoundIllustration from '@/assets/illustrations/not-found.svg';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <img src={notFoundIllustration} alt="" />
      <h2 className="title">Página não encontrada</h2>
      <p>A página que você está procurando não existe.</p>

      <Link to={'/'}>Voltar para a página inicial</Link>
    </main>
  );
};

export default NotFound;
