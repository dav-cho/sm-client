import { Route } from 'react-router-dom';

// import { ProtectedRoute } from './components/protected-route/protected-route.component';

import UsersPage from './pages/users/users.page';
import PostsPage from './pages/posts/posts.page';
import HomePage from './pages/home/home.page';
import AboutPage from './pages/about/about.page';
import ProfilePage from './pages/profile/profile.page';
import AccountsPage from './pages/accounts/accounts.page';
import RegisterPage from './pages/register/register.page';
import LoginPage from './pages/login/login.page';
import LogoutPage from './pages/logout/logout.page';
import ErrorPage from './pages/error/errorpage';

import { Header } from './components/header/header.component';

import './App.scss';

// const routes = [
//   { path: '/users', component: UsersPage, isProtected: true },
//   { path: '/posts', component: PostsPage, isProtected: false },
//   { path: '/about', component: AboutPage, isProtected: false },
//   { path: '/register', component: RegisterPage, isProtected: false },
//   { path: '/welcome', component: WelcomePage, isProtected: false },
//   { path: '/login', component: LoginPage, isProtected: false },
//   { path: '/logout', component: LogoutPage, isProtected: false },
// ];

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ProtectedRoute path="/users" component={UsersPage} isProtected={true} /> */}
      <Route path="/users" component={UsersPage} />
      <Route path="/posts" component={PostsPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/accounts" component={AccountsPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/logout" component={LogoutPage} />
      <Route path="/error" component={ErrorPage} />
    </div>
  );
}

export default App;
