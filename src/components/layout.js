import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import GlobalStyles from './global';
import device from './device';
import Header from './header';

const Main = styled.main`
  /* padding-top: 34px; */
  width: 100%;
  margin: 0px auto;
  padding: 0 25px;
  ${device.phoneXL`padding: 0 50px`}
  ${device.tablet`padding: 0 100px`}
  ${device.desktop`padding: 0 150px`}
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
        <Main>{children}</Main>
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
