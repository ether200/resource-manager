import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-1: #165780;
        --color-primary-2: #2d678c;
        --color-primary-dark: #0b2b3f;
        --color-secondary-1: #ffcf4c;
        --color-secondary-2: #ffc832;
        --color-secondary-dark: #ffbb00;
        --color-black: #1b1b1b;
        --color-white: #fafafa;
        --color-gray: #b9bab9;

        --font-primary: 'Work Sans', sans-serif;
        --font-secondary: 'Montserrat', sans-serif;
        --transition: all 0.3s linear;
        --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
    }

    *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: var(--font-primary);
  color: var(--color-black);
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.6rem;
  min-height: 100vh;
}

ul {
  list-style: none;
}

a {
  color: var(--color-primary-1);
  text-decoration: none;

  a:hover {
    cursor: pointer;
  }
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-secondary);
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  color: var(--color-primary-2);
}

h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2.5rem;
}

h4 {
  color: var(--color-black);
  font-size: 2rem;
  font-weight: 400;
}

p {
  font-size: 1.8rem;
}

img {
  width: 100%;
  display: block;
}

.btn {
  text-transform: uppercase;
  background: var(--color-primary-2);
  color: var(--color-white);
  padding: 1rem 1.5rem;
  display: inline-block;
  letter-spacing: 1.5;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: var(--light-shadow);
  outline: none;
  border: 2px solid transparent;

  &:hover {
    background: var(--color-primary-1);
  }

  &-secondary {
    background-color: var(--color-secondary-2);
    color: var(--color-primary-dark);

    &:hover {
      background-color: var(--color-secondary-dark);
    }
  }


  @media screen and(max-width: 768px) {
    width: 100%;
    font-size: 1.6rem;
  }
}

.form-error {
  color: #e32f2f;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  margin: 0.5rem 0;
}

@keyframes loading {
  to {
    transform: rotate(1turn);
  }
}
`;

export default GlobalStyles;
