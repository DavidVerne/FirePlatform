import { useRoutes } from 'react-router-dom';

// routes
import LandingRoute from './LandingRoute';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LandingRoute, MainRoutes, AuthenticationRoutes]);
}
