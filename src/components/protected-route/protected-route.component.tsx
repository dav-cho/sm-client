import { Route, Redirect } from 'react-router-dom';
// import { Route } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';

type ProtectedRouteProps = {
  path: string;
  component: React.FC;
  isProtected: boolean;
};

export const ProtectedRoute = ({
  path,
  component,
  isProtected,
}: ProtectedRouteProps) => {
  const { loggedIn } = useUserContext();

  return isProtected && loggedIn ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
