import styled from 'styled-components';
import Background from '../images/background.jpg';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(30rem, 27%) 1fr;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    grid-template-rows: 10% 1fr;
    grid-template-columns: none;
    gap: 3rem;
    place-items: center;
  }

  .hero {
    width: 100%;
    height: 100vh;
    background-image: url('${Background}');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .welcome {
      text-align: center;
      width: 40%;
      padding: 1rem;
      background-color: rgba(255, 255, 255, 0.7);
      box-shadow: var(--light-shadow);
      border-radius: 5px;
      border: 3px solid var(--color-secondary-dark);
    }

    @media only screen and (max-width: 968px) {
      justify-content: center;

      .welcome {
        width: 60%;
        padding: 2rem;
      }
    }

    @media only screen and (max-width: 768px) {
      grid-row: 1 / 2;
      height: 100%;

      .welcome {
        display: none;
      }
    }
  }
`;

export default Wrapper;
