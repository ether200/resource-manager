import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  position: fixed;
  width: 250px;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  left: -100%;
  margin: 0 auto;
  padding: 0.55rem 0;
  background-color: #fbfbfb;
  transition: 850ms;
  z-index: 2;

  &.open {
    left: 0;
    transition: 350ms;
  }

  .buttonWrapper {
    width: 90%;
    margin: 1rem auto;
    display: flex;
    justify-content: flex-end;
    button {
      display: inline-block;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
    }
  }

  ul {
    margin-top: 1.5rem;
    display: grid;
    grid-template-rows: auto;
    grid-auto-rows: auto;
    gap: 2rem;

    button {
      display: block;
      color: var(--color-white);
      cursor: pointer;
      width: 90%;
      margin: 0 auto;
      outline: none;
      border: none;
      background-color: var(--color-primary-2);
      font-family: inherit;
      font-size: 1.6rem;
      text-align: center;
      padding: 0.75rem;
      text-transform: capitalize;
      box-shadow: var(--light-shadow);
      transition: border 0.2s ease-in;

      &:hover {
        background-color: var(--color-primary-1);
      }
    }
  }
`;
