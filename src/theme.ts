import { css, injectGlobal } from 'react-emotion';

export const colors = {
  copy: '#000',
  background: '#fff',
  accent: '#1EA7F5',
  orange: '#FB7D01',
  red: '#E65251',
  green: '#4E9873',
  yellow: '#FED850',
  black: '#000',
  link: '#0A60EA',
  darkGrey: '#4c5356',
  mediumGrey: '#a8adb3',
  lightGrey: '#d8d8d8',
  lighterGrey: '#f2f2f2',
  bgGrey: '#f8f8f8'
};

export const sizes = {
  copy: '18px',
  title: '22px',
  titleBig: '54px',
  titleMedium: '30px',
  titleSmall: '22px',
  titleHuge: '90px',
  titleSmallest: '15px'
};

const stripeBackground = css`
  background: url("data:image/svg+xml;charset=utf8,%3Csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20'%3E%3Cstyle%3E.st1{fill:none;stroke:%23000;stroke-miterlimit:10}%3C/style%3E%3Cdefs%3E%3Cpath id='SVGID_1_' d='M0 0h20v20H0z'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' overflow='visible'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23SVGID_2_)'%3E%3Cpath class='st1' d='M-20.5-.5l21 21M-10.5-.5l21 21M-.5-.5l21 21M9.5-.5l21 21M19.5-.5l21 21'/%3E%3C/g%3E%3C/svg%3E")
    repeat center;
  background-size: 18px auto;
`;

const stripeBackgroundLarge = css`
  background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3C!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 30 30' style='enable-background:new 0 0 30 30;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0{clip-path:url(%23SVGID_2_);} .st1{fill:none;stroke:%23000000;stroke-width:2;stroke-miterlimit:10;} %3C/style%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' width='30' height='30'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg class='st0'%3E%3Cline class='st1' x1='-31.2' y1='31.2' x2='5.2' y2='-5.2'/%3E%3Cline class='st1' x1='-16.2' y1='31.2' x2='20.2' y2='-5.2'/%3E%3Cline class='st1' x1='-1.2' y1='31.2' x2='35.2' y2='-5.2'/%3E%3Cline class='st1' x1='13.8' y1='31.2' x2='50.2' y2='-5.2'/%3E%3Cline class='st1' x1='28.8' y1='31.2' x2='65.2' y2='-5.2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 18px auto;
`;

const stripeBackgroundLargeColor = css`
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230a60ea' fill-opacity='0.9' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 7px auto;
`;

export const styles = {
  stripeBackground,
  stripeBackgroundLarge,
  stripeBackgroundLargeColor
};

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik/Rubik-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik/Rubik-Light.ttf') format('truetype');
    font-weight: lighter;
    font-style: normal;
  }

  @font-face {
    font-family: 'Rubik';
    src: url('./assets/fonts/Rubik/Rubik-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway';
    src: url('./assets/fonts/Raleway/Raleway-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

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
    font-family: 'Raleway', sans-serif;
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
  
  h4 {
    font-size: ${sizes.titleSmallest}
  }

  a {
    text-decoration: none;
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
