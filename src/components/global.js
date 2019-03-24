import React from 'react';
import { Global, css } from '@emotion/core';
import device from './device';
import '../fonts/fonts.css';

const style = css`
  :root {
    --black: #092545;
    --blue: #2d6ae3;
    --grey: #c8d6df;
    --red: #da5050;
    --purple: #8c43ff;
    --bg-dark: #172742;
    --bg-light: #47524f;
    --primary: #00de7b;
    --white: #f6fffa;
    --grey-light: #cae5f5;
    --br: 5px;
    --br-big: 10px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-family: 'Stolzl', 'Halcom', 'Calibre', 'San Francisco', 'SF Pro Text',
      -apple-system, system-ui, BlinkMacSystemFont, Roboto, 'Helvetica Neue',
      'Segoe UI', Arial, sans-serif;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 18px;

    ${device.phoneXL} {
      font-size: 20px;
    }
  }

  body {
    ${'' /* background: linear-gradient(to top, #172742 0%, #47524f 100%) no-repeat; */}
    ${'' /* color: var(--white); */}
    margin: 0;
    padding: 0;
    ${'' /* border-bottom: 1px solid var(--bg-dark); */}
    min-height: 100vh;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.75rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  ${'' /*
  ::selection {
    color: var(--white);
    background-color: var(--primary);
  }
   */}

  a {
    text-decoration: none;
    color: var(--blue);
    ${'' /* transition: all 0.5s ease-in-out; */}
    &:hover,
    &:focus {
      outline: none;
      ${'' /* color: var(--primary); */}
    }
  }

  .hidden {
    display: none !important;
  }
`;

const GlobalStyles = () => <Global styles={style} />;

export default GlobalStyles;
