import styled from "styled-components";

export const LoginFormWrapper = styled.aside`
  padding: 4rem 3rem;

  h2 {
    margin-bottom: 3rem;
    text-align: center;
    margin-top: 6rem;
  }

  .form-control {
    margin-bottom: 2rem;

    label {
      color: var(--color-primary-dark);
      letter-spacing: 0.1rem;
    }

    input {
      display: block;
      margin: 0 auto;
      width: 95%;
      padding: 0.75rem;
      font-size: 1.5rem;
      font-family: inherit;
      border: 1px solid var(--color-gray);
      outline: none;
      color: inherit;

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

  @media screen and (max-width: 768px) {
    height: 100%;

    h2 {
      margin-top: 0;
    }

    p {
      margin-top: 4rem;
    }
  }
`;
