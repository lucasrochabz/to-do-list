import { Trash2, RotateCcw } from 'lucide-react';
import { useTrash } from '@/hooks/useTrash';
import { Button } from '@/components/Button';
import styles from './TrashPage.module.css';

const TrashPage = () => {
  const { trash, restoreTodo, deleteForever, clearTrash } = useTrash();

  return (
    <section className={styles.trash}>
      <h1 className={styles.title}>Lixeira</h1>
      <Button onClick={clearTrash}>Esvaziar lixeira</Button>

      <ul className={styles.list}>
        {trash.map((item) => (
          <li key={item.id}>
            <p>{item.text}</p>

            <div>
              <Button variant="icon" onClick={() => restoreTodo(item.id)}>
                <RotateCcw strokeWidth={1} />
              </Button>

              <Button variant="icon" onClick={() => deleteForever(item.id)}>
                <Trash2 strokeWidth={1} />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrashPage;
