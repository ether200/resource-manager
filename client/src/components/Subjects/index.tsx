import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSubjects } from '../../redux/actions/subjectActions';
import { SubjectInterface } from '../../redux/actions/subjectActionsTypes';
import { RootStore } from '../../redux/store';
import Subject from './Subject';

const Subjects = () => {
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: RootStore) => state.userState);
  const { subjects } = useSelector((state: RootStore) => state.subjectState);

  useEffect(() => {
    if (authorized) {
      dispatch(getAllSubjects);
    }
  }, [authorized, dispatch]);

  return (
    <ul>
      {subjects.map((subject: SubjectInterface) => (
        <Subject key={subject._id} name={subject.name} _id={subject._id} />
      ))}
    </ul>
  );
};

export default Subjects;
