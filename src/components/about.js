import React from 'react';
import styled from '@emotion/styled';
import device from './device';

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  ${device.tablet} {
    padding: 150px 0;
  }
`;

const SkillsContainer = styled.ul`
  display: flex;
  margin-top: 1rem;
  font-family: 'San Francisco';
  flex-flow: row wrap;
  max-width: 559px;
`;

const SkillsItem = styled.li`
  position: relative;
  flex-basis: 140px;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  font-size: 13px;
  max-width: 200px;

  ::before {
    content: '▹';
    font-size: 14px;
    line-height: 12px;
    position: absolute;
    left: 0;
  }
`;

const AvatarContainer = styled.div`
  margin: 3.25rem auto 0;

  ${device.tablet} {
    margin: 0 0 0 3.25rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  ${device.tablet} {
    width: 60%;
    max-width: 480px;
  }
`;

const BlurbContainer = styled.div``;

const AllContentContainer = styled.div`
  display: block;

  ${device.tablet} {
    display: flex;
    align-items: flex-start;
  }
`;

const P = styled.p`
  margin: 0 0 15px;
`;

const H3 = styled.h3`
  font-size: 24px;
  margin: 10px 0px 40px;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;

  ${device.tablet} {
    font-size: 32px;
  }

  ::after {
    content: '';
    display: block;
    height: 1px;
    background-color: rgb(45, 57, 82);
    position: relative;
    top: -5px;
    margin-left: 10px;
    width: 100%;

    ${device.tablet} {
      width: 200px;
    }

    ${device.desktop} {
      width: 300px;
    }
  }
`;

const About = () => (
  <Section>
    <H3>About Me</H3>
    <AllContentContainer>
      <ContentContainer>
        <BlurbContainer>
          <P>
            Hello! I{`'`}m Jeff, a software engineer based in Boston, MA. I
            develop websites and web apps that provide intuitive, pixel-perfect
            user interfaces with efficient and modern backends.
          </P>
          <P>
            In May of 2018, I joined the team at{' '}
            <a
              href="https://echobind.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Echobind
            </a>{' '}
            where I get to interface with a variety of interesting clients,
            projects, and tools on a daily basis.
          </P>
          <P>
            Here{`'`}s a few things I{`'`}m experienced with:
          </P>
        </BlurbContainer>
        <SkillsContainer>
          <SkillsItem>JavaScript</SkillsItem>
          <SkillsItem>HTML & CSS</SkillsItem>
          <SkillsItem>React</SkillsItem>
          <SkillsItem>React Native</SkillsItem>
          <SkillsItem>GraphQL</SkillsItem>
          <SkillsItem>Node.js</SkillsItem>
        </SkillsContainer>
      </ContentContainer>
      <AvatarContainer>Avatar Here</AvatarContainer>
    </AllContentContainer>
  </Section>
);

export default About;
