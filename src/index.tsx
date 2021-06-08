import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeContextProvider } from './contexts/theme.context';
import { UserContextProvider } from './contexts/user.context';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
