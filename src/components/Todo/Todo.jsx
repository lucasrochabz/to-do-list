import styles from './Todo.module.css';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div
      className={styles.todo}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.complete}
          onClick={() => completeTodo(todo.id)}
        >
          Completar
        </button>

        <button className={styles.remove} onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
