import { Route } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';

import { Welcome } from '../../components/users/welcome.component';

import './home.styles.scss';

const HomePage = () => {
  const { user } = useUserContext();
  console.log('~ USER FROM HOME', user);

  return (
    <>
      <Route path="/welcome" component={Welcome} />
    </>
  );
};

export default HomePage;
