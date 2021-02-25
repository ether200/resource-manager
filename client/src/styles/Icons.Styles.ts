import styled from 'styled-components';
import { GoThreeBars } from 'react-icons/go';
import { MdErrorOutline } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { MdSubject } from 'react-icons/md';
import { FiEdit, FiTrash } from 'react-icons/fi';

export const ThreeBars = styled(GoThreeBars)`
  color: var(--color-white);
  font-size: 2rem;
`;

export const ErrorIcon = styled(MdErrorOutline)`
  font-size: 2rem;
  align-self: center;
  justify-self: center;
`;

export const CloseIcon = styled(MdClose)`
  color: var(--color-primary-2);
  font-size: 2.5rem;
`;

export const BookIcon = styled(MdSubject)`
  margin-right: 0.75rem;
`;

export const EditIcon = styled(FiEdit)`
  color: var(--color-primary-dark);
  font-size: 2rem;

  &:hover {
    color: var(--color-primary-2);
  }
`;

export const TrashIcon = styled(FiTrash)`
  color: var(--color-primary-dark);
  font-size: 2rem;

  &:hover {
    color: var(--color-primary-2);
  }
`;
