import { FlashError } from '../../components/errors/flash-error.component';
import { AccessDenied } from '../../components/errors/access-denied.component';

interface ErrorPageProps {
  location: { state: { type: 'access' | 'other' } };
}

const ErrorPage = ({ location }: ErrorPageProps) => {
  const {
    state: { type },
  } = location;

  return (
    <>
      {type === 'access' && <AccessDenied />}
      {type === 'other' && <FlashError />}
    </>
  );
};

export default ErrorPage;
