import { useSelector } from 'react-redux';
import { WelcomeWrapper } from './Welcome.styles';
import { RootStore } from '../../redux/store';
import Spinner from '../Spinner';
import Image from '../../images/home.svg';

const WelcomeMessage = () => {
  const { user, loading } = useSelector((state: RootStore) => state.userState);

  return (
    <>
      {user && !loading ? (
        <WelcomeWrapper>
          <section>
            <h1>Welcome {user.name}</h1>
            <h4>Start by picking or making a new subject</h4>
            <img src={Image} alt='Welcome' />
          </section>
        </WelcomeWrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default WelcomeMessage;
