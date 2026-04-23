import { Check, X } from 'lucide-react';
import { Button } from '@/components/Button';
import styles from './Todo.module.css';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const completedClass = todo.isCompleted ? styles.todoCompleted : '';

  return (
    <li className={`${styles.todo} ${completedClass}`}>
      <p>{todo.text}</p>

      <div className={styles.actions}>
        <Button variant="icon" onClick={() => completeTodo(todo.id)}>
          <Check strokeWidth={1} />
        </Button>

        <Button variant="icon" onClick={() => removeTodo(todo.id)}>
          <X strokeWidth={1} />
        </Button>
      </div>
    </li>
  );
};

export default Todo;
