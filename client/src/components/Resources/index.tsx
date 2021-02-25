import { useSelector } from 'react-redux';
import { ResourceWrapper } from './Resources.styles';
import { ModalProps } from '../../pages/Subjects';
import { RootStore } from '../../redux/store';

import Resource from './Resource';

const Resources: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const { resources } = useSelector((state: RootStore) => state.resourceState);

  return (
    <ResourceWrapper>
      {resources.map((resource) => (
        <Resource
          key={resource._id}
          setIsModalOpen={setIsModalOpen}
          {...resource}
        />
      ))}
    </ResourceWrapper>
  );
};

export default Resources;
