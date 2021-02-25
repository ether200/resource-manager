import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
`;

export const LoadingSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  border: 1rem solid #dddddd;
  border-top-color: var(--color-secondary-dark);
  border-radius: 50%;
  animation: loading 1s linear infinite;
`;
