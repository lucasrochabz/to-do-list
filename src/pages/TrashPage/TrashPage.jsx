import { useTodo } from '@/contexts/useTodo';
import { EmptyState } from '@/components/EmptyState';
import { Button } from '@/components/Button';
import { TrashList } from '@/components/TrashList';

const TrashPage = () => {
  const { trash, clearTrash, restoreTodo, deleteForever } = useTodo();

  let content;
  if (!trash.length) content = <EmptyState message="Lixeira vazia" />;
  else {
    content = (
      <section>
        <Button onClick={clearTrash}>Esvaziar lixeira</Button>

        <TrashList
          trash={trash}
          restoreTodo={restoreTodo}
          deleteForever={deleteForever}
        />
      </section>
    );
  }

  return <>{content}</>;
};

export default TrashPage;
