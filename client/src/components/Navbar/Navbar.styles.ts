import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  height: 100%;
  width: 100%;
  background-color: var(--color-primary-1);

  .navbar-center {
    width: 95%;
    padding: 1.5rem 0;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      cursor: pointer;
      border: none;
      outline: none;
    }

    .links {
      a:first-of-type {
        margin-right: 2rem;
      }
      a {
        color: var(--color-white);
        cursor: pointer;

        &:hover {
          border-bottom: 2px solid var(--color-secondary-2);
        }
      }
    }
  }
`;
