import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';

// login option 3 routing
const Landing = Loadable(lazy(() => import('landing/Landing')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LandingRoute = {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/landing',
        element: <Landing />
      }
    ]
  };

export default LandingRoute;