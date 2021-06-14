import { Route } from 'react-router-dom';

import { Register } from '../../components/auth/register.component';
import { Login } from '../../components/auth/login.component';

const AccountsPage = () => {
  return (
    <>
      <h3>accounts page</h3>
      <Route path="/accounts/register" component={Register} />
      <Route path="/accounts/login" component={Login} />
    </>
  );
};

export default AccountsPage;
