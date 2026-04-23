import { MainLayout } from '@/components/MainLayout';
import { TodoPage } from '@/pages/TodoPage';
import { TrashPage } from '@/pages/TrashPage';
import { NotFound } from '@/pages/NotFound';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <TodoPage />, handle: { title: 'Tarefas' } },
      {
        path: '/trash',
        element: <TrashPage />,
        handle: { title: 'Lixeira' },
      },
    ],
  },
  { path: '*', element: <NotFound /> },
];
