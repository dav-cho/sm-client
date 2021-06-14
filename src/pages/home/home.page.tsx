import { Route } from 'react-router-dom';

import { Welcome } from '../../components/users/welcome.component';

import './home.styles.scss';

const HomePage = () => {
  return (
    <>
      <h1>home page</h1>
      <Route path="/welcome" component={Welcome} />
    </>
  );
};

export default HomePage;
