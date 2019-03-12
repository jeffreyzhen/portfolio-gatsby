import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyles from './global';
import Header from './header';

const StyledMain = styled.main`
  /* padding-top: 34px; */
  width: 100%;
  counter-reset: section 0;
  margin: 0px auto;
  padding: 0px 150px;
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
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledMain>{children}</StyledMain>
        {/* <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
