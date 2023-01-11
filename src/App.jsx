import Home from './views/Home';
import Settings from './views/Settings';
// import ErrorPage from './views/ErrorPage';
import './index.css';

import { Layout } from 'antd';

import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router';

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});
const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
});

const aboutRoute = rootRoute.createRoute({
  path: '/settings',
  component: Settings,
});

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
