import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { WelcomeWrapper } from '../WelcomePage/Welcome.styles';
import Error from '../../images/error.svg';
import { resetSelectedSubject } from '../../redux/actions/subjectActions';

type Props = {
  errorMessage: string | null;
};

const ErrorPage: React.FC<Props> = ({ errorMessage }) => {
  const dispatch = useDispatch();

  return (
    <WelcomeWrapper>
      <section>
        <h1>An error has ocurred</h1>
        <Link to='/subjects' onClick={() => dispatch(resetSelectedSubject)}>
          Return to home
        </Link>
        <h4>{errorMessage}</h4>
        <img src={Error} alt='Error 404' />
      </section>
    </WelcomeWrapper>
  );
};

export default ErrorPage;
