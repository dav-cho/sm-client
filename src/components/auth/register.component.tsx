import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserContext } from '../../contexts/user.context';
import { registerUser, loginUser } from '../../utils/auth.utils';

import { FormInput } from '../generics/forms/form-input.component';
import { FormButton } from '../generics/forms/form-button.component';

import './styles/register.styles.scss';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = formState;
    const user = await registerUser(formState);

    if (!user) return;

    await loginUser({ email, password });
    setUser(user);
    setLoggedIn(true);
    push('/profile');
  };

  return (
    <div className="register-container">
      <h3 className="register-title">register</h3>
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
