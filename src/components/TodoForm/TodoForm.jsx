import { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value || !category) return;

    addTodo(value, category);
    setValue('');
    setCategory('');
  };

  return (
    <section className={styles.todoForm}>
      <h2>Criar Tarefa</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            id="title"
            type="text"
            placeholder="Nova tarefa"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
          </select>
        </div>

        <button type="submit">Criar tarefa</button>
      </form>
    </section>
  );
};

export default TodoForm;
