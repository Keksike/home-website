import { darken } from 'polished';
import { injectGlobal } from 'react-emotion';
import SansForgetica from './assets/fonts/SansForgetica-Regular.otf';

export const colors = {
  copy: 'white',
  background: '#0a003d',
  heading: '#461556',
  heading2: '#0a0042',
  accent: '#ff8a00',
  accentDarker: darken(0.15, '#ff8a00'),
  black: '#000',
  link: '#da1b60',
  highlight: '#39b5f1'
};

export const sizes = {
  copy: '18px',
  title: '22px',
  titleBig: '54px',
  titleMedium: '36px',
  titleSmall: '22px',
  titleHuge: '90px'
};

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @font-face {
    font-family: 'SansForgetica';
    src: url(${SansForgetica}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    background-color: black;
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    overflow-x: hidden;
    font-family: "Poppins", sans-serif;
    font-size: ${sizes.copy};
    color: ${colors.copy};
    background: ${colors.black};
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-weight: normal;
  }

  h1 {
    font-size: ${sizes.titleBig}
  }

  h2 {
    font-size: ${sizes.titleMedium}
  }

  h3 {
    font-size: ${sizes.titleSmall}
  }
`;
