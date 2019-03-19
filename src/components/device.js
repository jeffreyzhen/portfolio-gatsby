const sizes = {
  phoneXL: 576,
  tablet: 768,
  desktop: 992,
};

const device = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `@media (min-width: ${sizes[label]}px)`;

  return acc;
}, {});

export default device;
