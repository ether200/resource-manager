import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  section {
    width: 95%;
    height: 100%;
    padding: 4rem 0;
    margin: 0 auto;
    text-align: center;

    a {
      border-bottom: 2px solid var(--color-secondary-2);
    }

    h4 {
      margin-top: 1.5rem;
    }

    img {
      height: 45rem;
    }
  }
`;
