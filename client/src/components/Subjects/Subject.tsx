import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { BookIcon } from '../../styles/Icons.Styles';

type SubjectProps = {
  name: string;
  _id: string;
};

const Subject = ({ name, _id }: SubjectProps) => {
  const history = useHistory();
  const { selectedSubject } = useSelector(
    (state: RootStore) => state.subjectState
  );
  return (
    <li>
      <button
        disabled={selectedSubject[0]?._id === _id}
        onClick={() => history.push(`/subjects/${_id}`)}
      >
        <BookIcon /> {name}
      </button>
    </li>
  );
};

export default Subject;
