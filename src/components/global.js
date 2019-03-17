import React from 'react';
import { Global, css } from '@emotion/core';
import '../fonts/fonts.css';

const style = css`
  :root {
    --black: #092545;
    --blue: #2d6ae3;
    --grey: #c8d6df;
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
    font-family: 'Stolzl', 'Halcom', '-apple-system', 'BlinkMacSystemFont',
      'Roboto', 'Helvetica', 'sans-serif', 'Apple Color Emoji';
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 16px;
    @media (min-width: 600px) {
      font-size: 18px;
    }
  }

  body {
    ${'' /* background: linear-gradient(to top, #172742 0%, #47524f 100%) no-repeat; */}
    ${'' /* color: var(--white); */}
    margin: 0;
    padding: 0;
    ${'' /* border-bottom: 1px solid var(--bg-dark); */}
    min-height: 100vh;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.17rem;
  }

  ::selection {
    color: var(--white);
    background-color: var(--primary);
  }

  a {
    color: var(--primary);
    ${'' /* transition: all 0.5s ease-in-out; */}
    text-decoration: none;
    &:hover,
    &:focus {
      ${'' /* color: var(--primary); */}
    }
  }

  .hidden {
    display: none !important;
  }
`;

const GlobalStyles = () => <Global styles={style} />;

export default GlobalStyles;
