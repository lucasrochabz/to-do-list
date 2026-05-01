import { Trash2, RotateCcw } from 'lucide-react';
import { TodoType } from '@/types/todo';
import { TrashActions } from '@/types/trash';
import { Button } from '@/components/Button';
import styles from './TrashList.module.css';

type TrashListProps = {
  trash: TodoType[];
} & TrashActions;

const TrashList = ({ trash, restoreTodo, deleteForever }: TrashListProps) => {
  return (
    <ul className={styles.list}>
      {trash.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>

          <div className={styles.actions}>
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
  );
};

export default TrashList;
