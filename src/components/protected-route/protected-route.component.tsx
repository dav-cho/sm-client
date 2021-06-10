// import { Route, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

// import { useUserContext } from '../../contexts/user.context';
// import { authenticatedUser } from '../../utils/auth.utils';

import { AccessDenied } from '../../components/access-denied/access-denied.component';
import React from 'react';

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
  // return isProtected && authenticatedUser() ? (
  return isProtected ? (
    <Route path={path} component={component} />
  ) : (
    <AccessDenied />
  );
};
