import { Check, X } from 'lucide-react';
import { TodoType, TodoActions } from '@/types/types';
import { Button } from '@/components/Button';
import styles from './Todo.module.css';

type TodoProps = {
  todo: TodoType;
} & TodoActions;

const Todo = ({ todo, completeTodo, removeTodo }: TodoProps) => {
  const completedClass = todo.isCompleted ? styles.todoCompleted : '';

  const handleComplete = () => completeTodo(todo.id);
  const handleRemove = () => removeTodo(todo.id);

  return (
    <li className={`${styles.todo} ${completedClass}`}>
      <p>{todo.text}</p>

      <div className={styles.actions}>
        <Button variant="icon" onClick={handleComplete}>
          <Check strokeWidth={1} />
        </Button>

        <Button variant="icon" onClick={handleRemove}>
          <X strokeWidth={1} />
        </Button>
      </div>
    </li>
  );
};

export default Todo;
