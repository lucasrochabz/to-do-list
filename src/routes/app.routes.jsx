import { MainLayout } from '@/components/MainLayout';
import { Home } from '@/pages/Home';
import { TrashPage } from '@/pages/TrashPage';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/trash', element: <TrashPage /> },
    ],
  },
];
