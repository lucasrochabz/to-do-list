import { TodoType, TodoActions } from '@/types/types';
import { Todo } from '@/components/Todo';
import styles from './TodoList.module.css';

type TodoListProps = {
  todos: TodoType[];
} & TodoActions;

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
