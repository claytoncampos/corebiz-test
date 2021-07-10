import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 

:root{
    --background: #FFF;
    --container: 77.5rem //1240px
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background: var(--background);
}

body, input, text-area, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
}


button {
    cursor: pointer;
  }

`;
