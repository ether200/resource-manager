import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectInfoWrapper } from './SubjectInfo.styles';
import { resetSelectedResource } from '../../redux/actions/resourceActions';
import { deleteSubject } from '../../redux/actions/subjectActions';
import { ModalProps } from '../../pages/Subjects';
import { RootStore } from '../../redux/store';
import Swal from 'sweetalert2';

const SubjectInfo: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { selectedSubject, subjectLoading } = useSelector(
    (state: RootStore) => state.subjectState
  );

  const onClickHandler = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'All resources will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ffc832',
      cancelButtonColor: '#2d678c',
      confirmButtonText: 'Yes, delete them!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSubject(id));
        history.push('/subjects');
      }
    });
  };

  return (
    <SubjectInfoWrapper>
      <h4>
        <span className='line'>Subject</span>:{' '}
        <span className='title'>{selectedSubject[0].name}</span>
      </h4>
      <div className='buttons'>
        <button
          className='btn btn-secondary'
          onClick={() => {
            dispatch(resetSelectedResource);
            setIsModalOpen(true);
          }}
        >
          New Resource
        </button>
        <button
          className='btn'
          onClick={() => onClickHandler(selectedSubject[0]._id)}
          disabled={subjectLoading}
        >
          Delete
        </button>
      </div>
    </SubjectInfoWrapper>
  );
};

export default SubjectInfo;
