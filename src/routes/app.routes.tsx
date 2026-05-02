import { ROUTES } from '@/constants/routes';
import { MainLayout } from '@/components/MainLayout';
import { TodoPage } from '@/pages/TodoPage';
import { TrashPage } from '@/pages/TrashPage';
import { NotFound } from '@/pages/NotFound';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <TodoPage />,
        handle: { title: 'Tarefas' },
      },
      {
        path: ROUTES.TRASH,
        element: <TrashPage />,
        handle: { title: 'Lixeira' },
      },
    ],
  },
  { path: '*', element: <NotFound /> },
];
