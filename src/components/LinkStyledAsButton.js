import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const A = styled.a`
  display: inline-block;
  font-family: 'San Francisco';
  font-size: 13px;
  padding: 1rem 1.25rem;
  border: 1px solid black;
  border-radius: 2px;
  margin-top: 2.75rem;
  line-height: 1;

  :hover {
    background-color: rgba(100, 255, 218, 0.07);
  }
`;

const LinkStyledAsButton = ({ href, children }) => (
  <A href={href}>{children}</A>
);

LinkStyledAsButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

LinkStyledAsButton.defaultProps = {
  href: ``,
  children: ``,
};

export default LinkStyledAsButton;
