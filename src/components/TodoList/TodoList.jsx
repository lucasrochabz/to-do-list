import { Todo } from '@/components/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, setTodos, search, filter, sort }) => {
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo,
    );

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null,
    );

    setTodos(filteredTodos);
  };

  return (
    <section className={styles.todoList}>
      {todos
        .filter((todo) =>
          filter === 'All'
            ? true
            : filter === 'Completed'
              ? todo.isCompleted
              : !todo.isCompleted,
        )
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) =>
          sort === 'Asc'
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text),
        )
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
    </section>
  );
};

export default TodoList;
