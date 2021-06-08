import React from 'react';
import { Route } from 'react-router-dom';

import UsersPage from './pages/users/users.page';
import PostsPage from './pages/posts/posts.page';
import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import RegisterPage from './pages/register/register.page';
import WelcomePage from './pages/welcome/welcome.page';
import LoginPage from './pages/login/login.page';
import LogoutPage from './pages/logout/logout.page';

import { Header } from './components/header/header.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/users" component={UsersPage} />
      <Route path="/posts" component={PostsPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/welcome" component={WelcomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
    </div>
  );
}

export default App;
