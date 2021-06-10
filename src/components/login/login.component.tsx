// import { useReducer } from 'react';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// import { postUserAuth, storeTokens } from '../../utils/auth.utils';
import { loginUser } from '../../utils/auth.utils';
import { useUserContext } from '../../contexts/user.context';

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
  const { setLoggedIn } = useUserContext();
  // const { push } = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;

    setFormState({ ...formState, [id]: value });
  };

  useEffect(() => {
    console.log('~ loginState', formState);
  }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tokens = await loginUser(formState);
    console.log('~ tokens from login component', tokens);

    setLoggedIn(true);

    // loginUser(formState).then(tokens => {
    //   console.log('~ tokens', tokens);
    //   setLoggedIn(true);
    // });

    // setFormState(initialFormState);
    // push('/welcome');
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

// export const Login = () => {
//   const [formState, setFormState] = useState<InputType>(initialFormState);
//   const { setLoggedIn } = useUserContext();
//   // const { push } = useHistory();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.currentTarget;

//     setFormState({ ...formState, [id]: value });
//   };

//   useEffect(() => {
//     console.log('~ loginState', formState);
//   }, [formState]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     postUserAuth('login', formState).then(() => {
//       setLoggedIn(true);
//     });

//     postUserAuth('token', formState).then(tokens => {
//       console.log('~ tokens', tokens);
//       storeTokens(tokens);
//     });

//     // setFormState(initialFormState);
//     // push('/welcome');
//   };

//   return (
//     <div className="login-form-container">
//       <form onSubmit={handleSubmit}>
//         <FormInput
//           label="Email"
//           id="email"
//           type="email"
//           value={formState.email}
//           onChange={handleChange}
//         />
//         <FormInput
//           label="Password"
//           id="password"
//           type="password"
//           value={formState.password}
//           onChange={handleChange}
//         />
//         <FormButton type="submit" label="SUBMIT" />
//       </form>
//     </div>
//   );
// };
