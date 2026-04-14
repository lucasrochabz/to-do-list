import Button from '../Button/Button';
import { Check } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import styles from './Todo.module.css';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <li
      className={styles.todo}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
    >
      <div className="content">
        <p>{todo.text}</p>
      </div>

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
