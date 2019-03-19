import React from 'react';
import styled from '@emotion/styled';
import device from './device';

const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 150px 0 100px;

  ${device.tablet} {
    padding: 150px 0;
  }
`;

const Div = styled.div`
  width: 100%;
`;

const Name = styled.h1`
  font-family: 'Calibre';
  font-weight: 600;
  margin: 0;
  line-height: 1.1;

  ${device.phoneXL} {
    font-size: 3rem;
  }
  ${device.tablet} {
    font-size: 3.5rem;
  }
  ${device.desktop} {
    font-size: 4rem;
  }
`;

const Statement = styled(Name)`
  color: var(--purple);
  margin-bottom: 0.5rem;
`;

const P = styled.p`
  margin-bottom: 1rem;
  font-family: Calibre;
`;

const Greeting = styled(P)`
  font-family: 'Stolzl';
  font-size: 0.8rem;
`;

const Hero = () => (
  <Section>
    <Div>
      <Greeting>👋 Hi, my name is</Greeting>
      <Name>Jeffrey Zhen.</Name>
      <Statement>I build things for the web.</Statement>
      <div>
        <P>
          I{`'`}m a web developer based in Boston, MA specializing in building
          high-quality websites and single-page applications. Currently working
          at{' '}
          <a
            href="https://echobind.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Echobind
          </a>{' '}
          as an Associate Engineer.
        </P>
      </div>
      {/* hi my name is */}
      {/* jeffrey zhen */}
      {/* i build things */}
      {/* blurb */}
    </Div>
  </Section>
);

export default Hero;
