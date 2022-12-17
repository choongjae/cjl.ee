import React from "react";
import styled from "styled-components";

import SectionHeading from "../SectionHeading";

import experience from "../../images/experience.png";
import experiencew from "../../images/experiencew.png";
import MetaLogo from "../../images/meta.png";
import CISLogo from "../../images/cornell.svg";
import ACSULogo from "../../images/acsu.png";
import CUSailLogo from "../../images/cusail.png";

const ExpData = [
  {
    logo: MetaLogo,
    org: "Meta",
    title: "Enterprise Software Engineer Intern",
    body: "Summer 2022<br> \
    Implemented a full-stack auditing system for an internal tool using Hack, \
    React, various other internal frameworks, and lots of free snacks from the \
    the microkitchens.",
  },
  {
    logo: CISLogo,
    org: "Cornell CIS",
    title: "Teaching Assistant",
    body: "Fall 2021 - Now<br> \
    Manage a lab section, grade assignments, hold consulting hours, and  \
    render assistance to students in Cornell's introductory CS courses.<br>\
    (Includes playing lots of Python Space Invaders.)",
  },
  {
    logo: ACSULogo,
    org: "ACSU",
    title: "Web Dev Officer",
    body: "Spring 2021 - Now<br> \
    Develop the website of the Association of Computer Science Undergraduates, \
    Cornell’s largest undergraduate CS club, with information about socials, \
    professional workshops, and general guidance for 1500 CS majors at Cornell<br>",
  },
  {
    logo: CUSailLogo,
    org: "CUSail",
    title: "Business and Operations Lead",
    body: "Fall 2020 - Now <br>\
    Manage logistics and outreach of the 30 member student-led project team, \
    from web development to recruitment, including raising $30,000 in-kind value,\
    all towards the goal of building a competition-ready autonomous sailboat!\
    ",
  },
];

const Experience = ({ className }) => {
  return (
    <ExpContainer id="experience">
      {/* <SectionHeading left={true}>experience</SectionHeading> */}
      {SectionHeading(true, [experience, experiencew], true)}
      <ExpBoxes>
        {ExpData.map((item, index) => {
          return (
            <ExpBox key={index} className={className}>
              <ExpColumn className="expTxt">
                <ExpOrg>{item.org}</ExpOrg>
                <ExpTitle>{item.title}</ExpTitle>
                <ExpBody dangerouslySetInnerHTML={{ __html: item.body }}></ExpBody>
              </ExpColumn>
              <ExpColumn className="expImg">
                <ExpImg src={item.logo} />
              </ExpColumn>
            </ExpBox>
          );
        })}
      </ExpBoxes>
    </ExpContainer>
  );
};

export default Experience;

const ExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

const ExpBoxes = styled.div`
  width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ExpBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 10% 0;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 20px 0 75px 0;
  }

  .expTxt {
    flex: 50%;
    margin: 0 5% 0 5%;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .expImg {
    flex: 20%;
    text-align: center;
    @media screen and (max-width: 768px) {
      ${"" /* flex: 40%; */}
    }
  }
`;

const ExpColumn = styled.div``;

const ExpOrg = styled.h3``;
const ExpTitle = styled.h4`
  font-size: 30px;
`;
const ExpBody = styled.p`
  font-size: 20px;
  margin-top: 5px;
`;
const ExpImg = styled.img`
  height: 125px;
  width: auto;
  align-self: end;

  @media screen and (max-width: 768px) {
    height: 6rem;
  }
`;
