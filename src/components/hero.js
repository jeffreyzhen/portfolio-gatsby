import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  max-width: 1000px;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  margin: 0px auto;
  padding: 150px 0px;
  align-items: flex-start;
  /* justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center; */
`;

const Hero = () => (
  <Section>
    <div>Herro</div>
  </Section>
);

export default Hero;
