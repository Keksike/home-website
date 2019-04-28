import { darken } from 'polished';
import { css, injectGlobal } from 'react-emotion';

export const colors = {
  copy: '#000',
  background: '#fff',
  heading: '#461556',
  heading2: '#0a0042',
  accent: '#1EA7F5',
  accentDarker: darken(0.15, '#ff8a00'),
  black: '#000',
  link: '#0A60EA',
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

const stripeBackground = css`
  background: url("data:image/svg+xml;charset=utf8,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20'%3E%3Cstyle%3E.st1{fill:none;stroke:%23000;stroke-miterlimit:10}%3C/style%3E%3Cdefs%3E%3Cpath id='SVGID_1_' d='M0 0h20v20H0z'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' overflow='visible'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23SVGID_2_)'%3E%3Cpath class='st1' d='M-20.5-.5l21 21M-10.5-.5l21 21M-.5-.5l21 21M9.5-.5l21 21M19.5-.5l21 21'/%3E%3C/g%3E%3C/svg%3E")
    repeat center;
  background-size: 18px auto;
`;

export const styles = {
  stripeBackground
};

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html, body {
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    overflow-x: hidden;
    font-family: "Rubik", sans-serif;
    font-size: ${sizes.copy};
    color: ${colors.copy};
    background-color: ${colors.background};
  }
  
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    line-height: 1.3rem;
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

  a {
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(115deg, ${colors.accent}, ${
  colors.link
});
    background-clip: text;
    -webkit-background-clip: text;
    box-decoration-break: clone;
    
  }
`;

export const breakpoints = {
  xs: 0,
  mobile: 300,
  tablet: 600,
  tabletLandscape: 900,
  mediumScreen: 1200,
  largeScreen: 1800
};

const cssRulePrefix = '@media screen and';

export const screenSizes = {
  onlyMobile: `${cssRulePrefix} (max-width: ${breakpoints.tablet}px)`,
  onlyTablet: `${cssRulePrefix} (max-width: ${
    breakpoints.mediumScreen
  }px) and (min-width: ${breakpoints.tablet}px)`,
  onlyTabletLandscape: `${cssRulePrefix} (max-width: ${
    breakpoints.mediumScreen
  }px) and (min-width: ${breakpoints.tabletLandscape}px)`,
  onlyTabletPortrait: `${cssRulePrefix} (max-width: ${
    breakpoints.tabletLandscape
  }px) and (min-width: ${breakpoints.tablet}px)`,
  belowTabletLandscape: `${cssRulePrefix} (max-width: ${
    breakpoints.tabletLandscape
  }px)`,
  aboveTabletLandscape: `${cssRulePrefix} (min-width: ${
    breakpoints.tabletLandscape
  }px)`,
  aboveTablet: `${cssRulePrefix} (min-width: ${breakpoints.tablet}px)`,
  onlyDesktop: `${cssRulePrefix} (min-width: ${breakpoints.mediumScreen}px)`,
  onlyLargeScreen: `${cssRulePrefix} (min-width: ${breakpoints.largeScreen}px)`,
  belowDesktop: `${cssRulePrefix} (max-width: ${breakpoints.mediumScreen}px)`,
  belowLargeScreen: `${cssRulePrefix} (max-width: ${breakpoints.largeScreen}px)`
};
