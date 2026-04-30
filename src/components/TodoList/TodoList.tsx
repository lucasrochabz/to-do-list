import { TodoType } from '@/types/types';
import { Todo } from '@/components/Todo';
import styles from './TodoList.module.css';

type TodoListProps = {
  todos: TodoType[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

const TodoList = ({ todos, completeTodo, removeTodo }: TodoListProps) => {
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
