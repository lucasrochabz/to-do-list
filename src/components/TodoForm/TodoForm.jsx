import { useState } from 'react';
import { Button } from '@/components/Button';
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="title"
        type="text"
        placeholder="Nova tarefa..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button type="submit">+ Add</Button>
    </form>
  );
};

export default TodoForm;
