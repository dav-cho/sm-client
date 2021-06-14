import AccessErrorSvg from '../../assets/access-error.svg';
import './styles/access-denied.styles.scss';

export const AccessDenied = () => (
  <div className="access-denied-container">
    <img src={AccessErrorSvg} alt="access error logo" width="60rem" />
    <h1>Access Denied</h1>
    <h3>You are not authorized to view this page</h3>
  </div>
);
