import './header.styles.scss';

export const Header = () => (
  <div className="header-container">
    <div className="header-title">
      <h3>project 4</h3>
    </div>
    <div className="nav-links">
      <a href="/users">users</a>
      <a href="/posts">posts</a>
      <a href="/">home</a>
      <a href="/about">about</a>
      <a href="/login">login</a>
      <a href="/register">register</a>
      <a href="/">(toggle theme)</a>
    </div>
  </div>
);
