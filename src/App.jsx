import Home from './views/Home';
import Details from './views/Details';
import Settings from './views/Settings';
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

const homeRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
});

const detailsRoute = rootRoute.createRoute({
  path: '/Details',
  component: Details,
});

const settingsRoute = rootRoute.createRoute({
  path: '/settings',
  component: Settings,
});

const routeConfig = rootRoute.addChildren([
  homeRoute,
  detailsRoute,
  settingsRoute,
]);

const router = createReactRouter({ routeConfig });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
