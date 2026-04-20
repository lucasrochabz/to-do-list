import { Trash2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/Button';
import styles from './TrashList.module.css';

const TrashList = ({ trash, restoreTodo, deleteForever, addTodo }) => {
  const handleRestore = (id) => {
    const todo = restoreTodo(id);

    if (todo) {
      addTodo(todo.text);
    }
  };

  return (
    <ul className={styles.list}>
      {trash.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>

          <div>
            <Button variant="icon" onClick={() => handleRestore(item.id)}>
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
