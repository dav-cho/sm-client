// import { useReducer } from 'react';
import { useState, useEffect } from 'react';

import { postUserData } from '../../utils/api.utils';

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
  const [loginState, setLoginState] = useState<InputType>(initialLoginState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setLoginState({ ...loginState, [id]: value });
  };

  useEffect(() => {
    console.log('~ loginState', loginState);
  }, [loginState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const { email, password } = e.target;

    postUserData('auth/login', loginState);
    // setLoginState(initialLoginState);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={loginState.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          value={loginState.password}
          onChange={handleChange}
        />
        <FormButton type="submit" label="SUBMIT" />
      </form>
    </div>
  );
};
