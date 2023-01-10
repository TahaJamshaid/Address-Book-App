import Home from './views/Home';
import Settings from './views/Settings';
import ErrorPage from './views/ErrorPage';
import './index.css';

import { Layout } from 'antd';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
