import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  max-height: 100px;
  padding: 1rem 1.5rem;
  width: 100%;
`;

const Nav = styled.nav``;

const NavbarBrand = styled.div``;

const NavbarMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  max-width: 400px;
  align-items: center;
`;

const NavbarItem = styled.div``;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Nav>
      <NavbarMenu>
        <NavbarBrand>
          <Link to="/">Icon</Link>
        </NavbarBrand>
        <NavbarItem>
          <Link to="">Me</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="">Work</Link>
        </NavbarItem>
        <NavbarItem>
          <a href="https://medium.com/@jeffreyzhen">Blog</a>
        </NavbarItem>
        <NavbarItem>
          <Link to="">Resume</Link>
        </NavbarItem>
      </NavbarMenu>
    </Nav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
