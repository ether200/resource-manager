import styled from 'styled-components';

export const ResourceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-gap: 2rem;
`;

export const ResourceCard = styled.div`
  padding: 1.5rem;
  box-shadow: var(--light-shadow);

  .video-wrapper {
    width: 100%;
    height: 28rem;
  }

  h4 {
    margin: 1rem 0;
    font-weight: bold;
    border-bottom: 1px solid var(--color-secondary-1);
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tag {
      color: var(--color-white);
      background-color: var(--color-primary-1);
      padding: 0 0.5rem;
      border-radius: 1rem;
    }

    .icons {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 1.5rem;

      button {
        background: transparent;
        cursor: pointer;
        border: none;
        outline: none;
      }
    }
  }
`;
