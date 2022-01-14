import React from "react";
import styled from "styled-components";

import { SectionHeading } from "../SectionHeading";
import Age from "../Age";
import InlineLink from "../InlineLink";
import IconLink from "../IconLink";

import resumeFile from "/static/cjlee-resume.pdf";
import Myself from "../../images/self.jpg";
import LinkedIn from "../../images/linkedin.svg";
import LinkedInI from "../../images/linkedini.svg";
import Resume from "../../images/resume.svg";
import ResumeI from "../../images/resumei.svg";
import Email from "../../images/email.svg";
import EmailI from "../../images/emaili.svg";
import GitHub from "../../images/github.svg";
import GitHubI from "../../images/githubi.svg";

const links = [
  {
    text: "Cornell University",
    color: "#B31B1B",
    link: "https://www.youtube.com/watch?v=OL2fmTJU2P4&t=3896s",
  },
  {
    text: "New Jersey",
    color: "#486782",
    link: "https://youtu.be/2r0h2mNz91M?t=19",
  },
  {
    text: "Oklahoma",
    color: "#841617",
    link: "https://www.youtube.com/watch?v=n7JIFiI63XA",
  },
];

const AboutBio = () => {
  return (
    <>
      <AboutIntro>Hi! I'm CJ.</AboutIntro>
      <AboutDetails>
        I'm a {Age(birthdate)}-year-old sophomore at {InlineLink(links[0])}{" "}
        studying Computer Science. I'm from north {InlineLink(links[1])},
        although I've really spent most of my life in {InlineLink(links[2])}
        .
        <br />
        <br />
        My love for computers and technology began at a young age, and I'm
        incredibly amazed and passionate at how much technology is changing the
        state of the world every year.
      </AboutDetails>
    </>
  );
};

const AboutIcons = () => {
  return (
    <>
      <AboutIcon
        src={[LinkedIn, LinkedInI]}
        link={"https://www.linkedin.com/in/cj-lee/"}
      />
      <AboutIcon
        src={[GitHub, GitHubI]}
        link={"https://github.com/choongjae"}
      />
      <AboutIcon src={[Resume, ResumeI]} link={resumeFile} />
      <AboutIcon src={[Email, EmailI]} link={"mailto:cl2362@cornell.edu"} />
    </>
  );
};

const birthdate = new Date("March 28, 02 12:16:40 GMT-07:00").getTime();

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionHeading left={false}>about</SectionHeading>
      <AboutFlex>
        <AboutColumn>
          <AboutImage src={Myself} />
        </AboutColumn>
        <AboutColumn>
          <AboutBio />
          <AboutIcons />
        </AboutColumn>
      </AboutFlex>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;

  @media screen and (max-width: 850px) {
    height: 100%;
  }
`;

const AboutFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: min(100%, 1400px);
  margin: 0 auto 0 auto;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 0px;
  }
`;

const AboutColumn = styled.div`
  flex: 50%;
  align-items: center;
  justify-content: center;
`;

const AboutImage = styled.img`
  width: min(80%, 500px);
  height: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const AboutIntro = styled.h2``;

const AboutDetails = styled.p`
  width: min(75%, 750px);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const AboutIcon = styled(IconLink)`
  margin: 50px 20px 0px 20px;
  width: min(10%, 75px);
`;
