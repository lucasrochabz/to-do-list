import { Button } from '@/components/Button';
import { Check } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import styles from './Todo.module.css';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const completedClass = todo.isCompleted ? styles.todoCompleted : '';

  return (
    <li className={`${styles.todo} ${completedClass}`}>
      <p>{todo.text}</p>

      <div className={styles.buttons}>
        <Button variant="icon" onClick={() => completeTodo(todo.id)}>
          <Check size={24} strokeWidth={1} />
        </Button>

        <Button variant="icon" onClick={() => removeTodo(todo.id)}>
          <Trash2 size={24} strokeWidth={1} />
        </Button>
      </div>
    </li>
  );
};

export default Todo;
