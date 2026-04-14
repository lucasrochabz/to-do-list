import { Todo } from '@/components/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
