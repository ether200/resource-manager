import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ResourceSchema } from '../../yup';
import {
  createResource,
  editResource,
} from '../../redux/actions/resourceActions';
import { RegisterFormWrapper } from '../RegisterForm/RegisterForm.styles';
import { ModalProps } from '../../pages/Subjects';
import { RootStore } from '../../redux/store';
import FormInput from '../FormInput';

export interface ResourceFormValues {
  title: string;
  url: string;
  tag?: string;
}

const ResourceForm: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { selectedSubject } = useSelector(
    (state: RootStore) => state.subjectState
  );
  const { selectedResource } = useSelector(
    (state: RootStore) => state.resourceState
  );
  const action =
    selectedResource.length === 0
      ? { title: 'Create new resource', action: 'Create' }
      : { title: 'Edit resource', action: 'Edit' };

  const { register, handleSubmit, errors } = useForm<ResourceFormValues>({
    mode: 'onBlur',
    resolver: yupResolver(ResourceSchema),
  });

  const onSubmit: SubmitHandler<ResourceFormValues> = ({ title, url, tag }) => {
    if (action.action === 'Create') {
      const newResource = { title, url, tag, subject: selectedSubject[0]._id };
      dispatch(createResource(newResource));
      setIsModalOpen(false);
    } else {
      const editedResource = { title, url, tag };
      dispatch(editResource(editedResource, selectedResource[0]._id));
      setIsModalOpen(false);
    }
  };

  return (
    <RegisterFormWrapper onClick={(e) => e.stopPropagation()}>
      <h2>{action.title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id='title'
          name='title'
          type='text'
          label='Title'
          register={register}
          errors={errors.title}
          placeholder='Title for your resource'
          defaultValue={selectedResource[0]?.title}
        />
        <FormInput
          id='url'
          name='url'
          type='text'
          label='Video URL'
          register={register}
          errors={errors.url}
          placeholder='https://youtu.be/DdvhZj7SsEM'
          defaultValue={selectedResource[0]?.url}
        />
        <FormInput
          id='tag'
          name='tag'
          type='text'
          label='Tag'
          register={register}
          errors={errors.tag}
          placeholder='This field is optional'
          defaultValue={selectedResource[0]?.tag}
        />
        <button className='btn' type='submit'>
          {action.action}
        </button>
      </form>
    </RegisterFormWrapper>
  );
};

export default ResourceForm;
