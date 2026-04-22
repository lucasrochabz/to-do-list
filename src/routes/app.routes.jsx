import { MainLayout } from '@/components/MainLayout';
import { TodoPage } from '@/pages/TodoPage';
import { TrashPage } from '@/pages/TrashPage';

// fix: add NotFound
export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <TodoPage />, handle: { title: 'Suas tarefas' } },
      {
        path: '/trash',
        element: <TrashPage />,
        handle: { title: 'Lixeira' },
      },
    ],
  },
];
