import { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <section className={styles.todoForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            id="title"
            type="text"
            placeholder="Nova tarefa..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit">+ Add</button>
      </form>
    </section>
  );
};

export default TodoForm;
