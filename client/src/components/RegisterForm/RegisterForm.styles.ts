import styled from "styled-components";

export const RegisterFormWrapper = styled.div`
  padding: 4rem 3rem;
  background-color: var(--color-white);
  border-radius: 0.5rem;
  width: 40rem;
  margin: 0 auto;
  box-shadow: var(--dark-shadow);

  @media screen and (max-width: 450px) {
    width: 35rem;
  }

  h2 {
    text-align: center;
  }

  .form-control {
    margin-bottom: 2rem;
    margin: 2rem auto;

    input {
      display: block;
      width: 100%;
      padding: 0.75rem;
      font-size: 1.5rem;
      font-family: inherit;
      border: 1px solid var(--color-gray);
      color: inherit;
      outline: none;

      &:focus {
        border: 1px solid var(--color-primary-1);
      }
    }
  }

  button {
    width: 100%;
  }

  p {
    margin-top: 2rem;
  }
`;
