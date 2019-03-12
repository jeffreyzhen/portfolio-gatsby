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
  align-items: center;
  max-width: 400px;
`;

const NavbarItem = styled.div`
  /* transition: all 0.65s cubic-bezier(0.62, 0.02, 0.34, 1) 1.1s; */
  transform: translateX(0px);
  /* opacity: 1; */
  /* visibility: visible; */
`;

const StyledSpan = styled.span`
  ::before {
    content: '';
    position: absolute;
    top: calc(50% - -9px);
    color: var(--blue);
    left: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    background: currentColor;
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 50%;
    transition: transform 0.5s;
    ${'' /* transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1); */}
  }
`;

const StyledLink = styled(Link)`
  color: var(--black);

  :hover {
    color: var(--black);

    ${StyledSpan}::before {
      transform: scale3d(1, 1, 1);
      transform-origin: 0% 50%;
    }
  }
`;

const StyledLogo = styled(StyledLink)`
  ::before,
  ::after {
    content: '\00a0';
  }

  color: var(--grey);
  font-size: 1.5rem;
  font-weight: 900;
  font-family: 'Halcom';
  ${'' /* transition: color 0.65s cubic-bezier(0.62, 0.02, 0.34, 1) 1s; */}
  transition: color 0.65s;

  :hover {
    color: var(--blue);
  }
`;

const Header = ({ siteTitle }) => {
  const StyledAnchor = StyledLink.withComponent('a');

  return (
    <StyledHeader>
      <Nav>
        <NavbarMenu>
          <NavbarBrand>
            <StyledLogo to="/">jZ.</StyledLogo>
          </NavbarBrand>
          <NavbarItem>
            <StyledLink to="">
              <StyledSpan>About</StyledSpan>
            </StyledLink>
          </NavbarItem>
          <NavbarItem>
            <StyledLink to="">
              <StyledSpan>Experience</StyledSpan>
            </StyledLink>
          </NavbarItem>
          <NavbarItem>
            <StyledAnchor href="https://medium.com/@jeffreyzhen">
              <StyledSpan>Blog</StyledSpan>
            </StyledAnchor>
          </NavbarItem>
          <NavbarItem>
            <StyledLink to="">
              <StyledSpan>Resume</StyledSpan>
            </StyledLink>
          </NavbarItem>
        </NavbarMenu>
      </Nav>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
