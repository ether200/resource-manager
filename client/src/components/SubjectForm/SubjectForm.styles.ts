import styled from "styled-components";

export const SubjectFormWrapper = styled.div`
  width: 90%;
  margin: 1rem auto;

  h2 {
    text-align: center;
  }

  input {
    display: block;
    margin-bottom: 1.5rem;
    width: 100%;
    padding: 0.75rem;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    border: 1px solid var(--color-gray);
    outline: none;

    &:focus {
      border: 1px solid var(--color-primary-1);
    }
  }

  button {
    width: 100%;
    background-color: var(--color-secondary-2);
    color: var(--color-primary-dark);

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }
`;
