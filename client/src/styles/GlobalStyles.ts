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
`;

export default GlobalStyles;
