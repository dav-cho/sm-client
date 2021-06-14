import ErrorSvg from '../../assets/error.svg';
import './styles/flash-error.styles.scss';

export const FlashError = () => {
  return (
    <>
      <img src={ErrorSvg} alt="access error logo" width="60rem" />
      <h1>flash error</h1>
    </>
  );
};
