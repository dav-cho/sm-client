import { Route } from 'react-router-dom';

import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import AccountsPage from './pages/accounts/accounts.page';
import ProfilePage from './pages/profile/profile.page';
import PostsPage from './pages/posts/posts.page';
import ErrorPage from './pages/error/errorpage';
import UsersPage from './pages/users/users.page';

import { Header } from './components/header/header.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/accounts" component={AccountsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/posts" component={PostsPage} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
}

export default App;

/**
 * TODO: route wrapper for protected components
 **/

// <ProtectedRoute path="/users" component={UsersPage} isProtected={true} />

// const routes = [
//   { path: '/users', component: UsersPage, isProtected: true },
//   { path: '/posts', component: PostsPage, isProtected: false },
//   { path: '/about', component: AboutPage, isProtected: false },
//   { path: '/register', component: RegisterPage, isProtected: false },
//   { path: '/welcome', component: WelcomePage, isProtected: false },
//   { path: '/login', component: LoginPage, isProtected: false },
//   { path: '/logout', component: LogoutPage, isProtected: false },
// ];
