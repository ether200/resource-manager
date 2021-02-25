import { createPortal } from 'react-dom';
import { ModalWrapper } from './Modal.styles';

type Props = {
  children: JSX.Element;
  isModalOpen: boolean;
  setIsModalOpen: (a: boolean) => void;
};

const Modal: React.FC<Props> = ({ children, isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) return null;

  return createPortal(
    <ModalWrapper onClick={() => setIsModalOpen(false)}>
      {children}
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
