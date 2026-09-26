import { PATHS } from '@/constants/paths';
import { MainLayout } from '@/components/MainLayout';
import { TodoPage } from '@/pages/TodoPage';
import { TrashPage } from '@/pages/TrashPage';
import { NotFound } from '@/pages/NotFound';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <TodoPage />,
        handle: { title: 'Tarefas' },
      },
      {
        path: PATHS.TRASH,
        element: <TrashPage />,
        handle: { title: 'Lixeira' },
      },
    ],
  },
  { path: '*', element: <NotFound /> },
];
