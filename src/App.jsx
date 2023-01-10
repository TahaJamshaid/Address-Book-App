import Home from './views/Home';
import Details from './views/Details';
import Settings from './views/Settings';
import ErrorPage from './views/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'details/:contactId',
    element: <Details />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
