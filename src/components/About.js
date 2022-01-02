import React, { useEffect, useState } from "react";
import styled from "styled-components";

import resumeFile from "/static/cjlee-resume.pdf";
import { SectionHeading } from "./SectionHeading";
import Myself from "../images/self.jpg";
import LinkedIn from "../images/linkedin.svg";
import Resume from "../images/resume.svg";
import Email from "../images/email.svg";
import GitHub from "../images/github.svg";

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

const birthday = new Date("March 28, 02 12:16:40 GMT-07:00").getTime();
const calculateAge = () => {
  return (Date.now() - birthday) / 31536000000;
};

const Age = () => {
  const [time, setTime] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => setTime(calculateAge()), 25);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return time.toString().slice(0, 12);
};

const Icon = (src, link) => {
  return (
    <a href={link} rel="noopener noreferrer">
      <AboutIcon src={src} />
    </a>
  );
};

const Link = (obj) => (
  <a style={{ color: obj.color }} href={obj.link} rel="noopener noreferrer">
    {obj.text}
  </a>
);

const About = () => {
  return (
    <AboutContainer id="about">
      <SectionHeading left={false}>about</SectionHeading>
      <AboutFlex>
        <AboutColumn>
          <AboutImage src={Myself} />
        </AboutColumn>
        <AboutColumn>
          <AboutH1>Hi! I'm CJ.</AboutH1>
          <AboutBio>
            I’m a {Age()}-year-old sophomore at {Link(links[0])} studying
            Computer Science. I’m from north {Link(links[1])}, although I’ve
            really spent most of my life in {Link(links[2])}.
            <br />
            <br />
            My love for computers and technology began at a young age, and I’m
            incredibly amazed and passionate at how much technology is changing
            the state of the world every year.
          </AboutBio>
          {Icon(LinkedIn, "https://www.linkedin.com/in/cj-lee/")}
          {Icon(GitHub, "https://github.com/choongjae")}
          {Icon(Resume, resumeFile)}
          {Icon(Email, "mailto:cl2362@cornell.edu")}
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
const AboutH1 = styled.h2``;
const AboutBio = styled.p`
  width: min(75%, 750px);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const AboutIcon = styled.img`
  margin: 50px 25px 0px 25px;
  width: min(10%, 75px);
`;
