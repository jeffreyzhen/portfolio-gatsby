import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Header from './header';
import '../fonts/fonts.css';

const GlobalStyle = css`
  :root {
    --bg-dark: #172742;
    --bg-light: #47524f;
    --primary: #00de7b;
    --black: #092545;
    --blue: #00d6dd;
    --white: #f6fffa;
    --grey: #c8d6df;
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
      'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  body {
    ${'' /* background: linear-gradient(to top, #172742 0%, #47524f 100%) no-repeat; */}
    ${'' /* color: var(--white); */}
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--bg-dark);
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
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
      color: var(--primary);
    }
  }

  .hidden {
    display: none !important;
  }
`;

const StyledMain = styled.main`
  padding-top: 34px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global styles={GlobalStyle} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <StyledMain>{children}</StyledMain>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
