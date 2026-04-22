import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoProvider';
import { routes } from './routes/app.routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
};

export default App;
