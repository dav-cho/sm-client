// import { useReducer } from 'react';
import { useState, useEffect } from 'react';

import { postUserData } from '../../utils/api.utils';

import { FormInput } from '../form-input/form-input.component';
import { FormButton } from '../form-button/form-button';

import './register.styles.scss';

type InputType = {
  [input: string]: string;
};

const initialFormState = {
  email: '',
  username: '',
  password: '',
  confirm_password: '',
};

export const Register = () => {
  const [formState, setFormState] = useState<InputType>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  useEffect(() => {
    console.log('~ formState', formState);
  }, [formState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    postUserData('register', formState).then(newUser =>
      console.log('~ newUser', newUser)
    );
    // console.log('~ formState', formState);
    // setFormState(initialFormState);
  };

  return (
    <div className="login-form-container">
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
