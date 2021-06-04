import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';
import { LoginPage } from './pages/login/login.page';
import { PostsPage } from './pages/posts/posts.page';
import { RegisterPage } from './pages/register/register.page';

import { Header } from './components/header/header.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/posts" component={PostsPage} />
      </Router>
    </div>
  );
}

export default App;
