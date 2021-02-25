import { useSelector } from 'react-redux';
import { ModalProps } from '../../pages/Subjects';
import { RootStore } from '../../redux/store';
import { AppWrapper } from './AppPage.styles';

import ErrorPage from '../ErrorPage';
import SubjectInfo from '../SubjectInfo';
import Resources from '../Resources';
import Spinner from '../Spinner';

const AppPage: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const { selectedSubject, subjectLoading, subjectError } = useSelector(
    (state: RootStore) => state.subjectState
  );
  const { resourceLoading } = useSelector(
    (state: RootStore) => state.resourceState
  );

  if (subjectError) return <ErrorPage errorMessage={subjectError} />;
  return (
    <>
      {!subjectLoading && !resourceLoading && selectedSubject.length > 0 ? (
        <AppWrapper>
          <section>
            <SubjectInfo setIsModalOpen={setIsModalOpen} />
            <Resources setIsModalOpen={setIsModalOpen} />
          </section>
        </AppWrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default AppPage;
