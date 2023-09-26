import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
const Register = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));
const Authorize = Loadable(lazy(() => import('views/pages/authentication/authentication/Authorize')));
const ResetPassword = Loadable(lazy(() => import('views/pages/authentication/authentication/ResetPassword')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/authorize',
      element: <Authorize />
    },
    {
      path: '/resetpassword',
      element: <ResetPassword />
    }
  ]
};

export default AuthenticationRoutes;
