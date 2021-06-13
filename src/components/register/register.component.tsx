// import { useReducer } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// import { RegisterFormData } from '../../types/index.types';
import { useUserContext } from '../../contexts/user.context';
import { registerUser, loginUser } from '../../utils/auth.utils';

import { FormInput } from '../form-input/form-input.component';
import { FormButton } from '../form-button/form-button.component';

import './register.styles.scss';

type RegisterFormData = {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
};

const initialFormState = {
  email: '',
  username: '',
  password: '',
  confirm_password: '',
};

export const Register = () => {
  const [formState, setFormState] =
    useState<RegisterFormData>(initialFormState);
  const { setUser, setLoggedIn } = useUserContext();
  const { push } = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  useEffect(() => {
    console.log('register.component ~ formState', formState);
  }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formState;
    const user = await registerUser(formState);
    console.log('register success ~ user', user);

    if (!user) return;

    await loginUser({ email, password });
    setUser(user);
    setLoggedIn(true);
    push('/welcome');
    // push('/home');
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <FormInput
          label="Username"
          id="username"
          type="text"
          value={formState.username}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          id="confirm_password"
          type="password"
          value={formState.confirm_password}
          onChange={handleChange}
        />
        <FormButton type="submit" label="SUBMIT" />
      </form>
    </div>
  );
};
