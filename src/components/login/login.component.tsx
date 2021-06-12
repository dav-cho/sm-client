import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
import { loginUser } from '../../utils/auth.utils';
// import { getUser } from '../../utils/user.utils';

import { FormInput } from '../form-input/form-input.component';
import { FormButton } from '../form-button/form-button';

import './login.styles.scss';

type InputType = {
  [input: string]: string;
};

const initialFormState = {
  email: '',
  password: '',
};

export const Login = () => {
  const [formState, setFormState] = useState<InputType>(initialFormState);
  const { setUser, setLoggedIn } = useUserContext();
  const { push } = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  // useEffect(() => {
  //   console.log('~ loginState', formState);
  // }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('~ formState', formState);
    const userData = await loginUser(formState);

    if (!userData) return;

    setUser(userData.user);
    setLoggedIn(true);
    // push('/users');
    push('/welcome');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <FormButton type="submit" label="SUBMIT" />
      </form>
    </div>
  );
};
