import styled from "styled-components";

export const SubjectInfoWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  background-color: var(--color-white);
  box-shadow: var(--light-shadow);
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-gray);

  h4 {
    margin-bottom: 0;
    font-weight: bold;
    font-size: 2.5rem;

    .line {
      border-bottom: 1px solid var(--color-secondary-1);
    }

    .title {
      text-transform: capitalize;
    }
  }

  .buttons {
    button:first-of-type {
      margin-right: 2rem;
    }
  }

  @media only screen and (max-width: 650px) {
    flex-direction: column;

    .buttons {
      margin-top: 2rem;
    }
  }
`;
