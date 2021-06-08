// import { useReducer } from 'react';
import { useState, useEffect } from 'react';

import { postUserData } from '../../utils/api.utils';
import { useUserContext } from '../../contexts/user.context';

import { FormInput } from '../form-input/form-input.component';
import { FormButton } from '../form-button/form-button';

import './login.styles.scss';

type InputType = {
  [input: string]: string;
};

const initialLoginState = {
  email: '',
  password: '',
};

export const Login = () => {
  const [loginFormState, setLoginFormState] =
    useState<InputType>(initialLoginState);
  const { setLoggedIn } = useUserContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setLoginFormState({ ...loginFormState, [id]: value });
  };

  useEffect(() => {
    console.log('~ loginState', loginFormState);
  }, [loginFormState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const { email, password } = e.target;

    postUserData('auth/login', loginFormState).then(tokens => {
      console.log('~ tokens', tokens);
      localStorage.setItem('access', tokens.access);
      localStorage.setItem('refresh', tokens.refresh);
      setLoggedIn(true);
    });

    postUserData('login', loginFormState);
    // setLoginState(initialLoginState);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={loginFormState.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          value={loginFormState.password}
          onChange={handleChange}
        />
        <FormButton type="submit" label="SUBMIT" />
      </form>
    </div>
  );
};
