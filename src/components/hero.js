import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  border: 1px solid red;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  padding: 150px 0px;
  background-color: papayawhip;
  align-items: flex-start;
  justify-content: center;
`;

const Hero = () => (
  <Section>
    <div>Herro</div>
  </Section>
);

export default Hero;
