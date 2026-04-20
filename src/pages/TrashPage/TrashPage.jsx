import { useContext } from 'react';
import { TodoContext } from '@/contexts/TodoContext';
import { EmptyState } from '@/components/EmptyState';
import { Button } from '@/components/Button';
import { TrashList } from '@/components/TrashList';
import styles from './TrashPage.module.css';

const TrashPage = () => {
  const { trash, clearTrash, restoreTodo, deleteForever, addTodo } =
    useContext(TodoContext);

  let content;
  if (!trash.length) content = <EmptyState message="Lixeira vazia" />;
  else {
    content = (
      <section className={styles.trash}>
        <Button onClick={clearTrash}>Esvaziar lixeira</Button>

        <TrashList
          trash={trash}
          restoreTodo={restoreTodo}
          deleteForever={deleteForever}
          addTodo={addTodo}
        />
      </section>
    );
  }

  return (
    <>
      <h1 className={styles.title}>Lixeira</h1>
      {content}
    </>
  );
};

export default TrashPage;
