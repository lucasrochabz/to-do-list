import { MainLayout } from '@/components/MainLayout';
import { Bin } from '@/pages/Bin';
import { Home } from '@/pages/Home';

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/bin', element: <Bin /> },
    ],
  },
];
