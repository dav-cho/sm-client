import { Route } from 'react-router-dom';

import { Register } from '../../components/auth/register.component';
import { Login } from '../../components/auth/login.component';

const AccountsPage = () => {
  return (
    <>
      <h1>accounts page</h1>
      {/* <Login /> */}
      <Route path="/accounts/register" component={Register} />
      <Route path="/accounts/login" component={Login} />
      {/* <Route path="accounts/login" render={() => <Login />} /> */}
      {/* <Route path="accounts/login" children={() => <Login />} /> */}
    </>
  );
};

export default AccountsPage;
