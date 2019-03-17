import { css } from '@emotion/core';

const sizes = {
  phoneXL: 576,
  tablet: 768,
  desktop: 992,
};

// Iterate through the sizes and create a media template
const device = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default device;
