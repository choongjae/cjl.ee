import React from "react";
import styled from "styled-components";

import MetaLogo from "../images/Meta.png";
import CISLogo from "../images/cornell.png";
import ACSULogo from "../images/acsu.png";
import CUSailLogo from "../images/CUSail.png";
import { SectionHeading } from "./SectionHeading";

const ExpData = [
  {
    logo: MetaLogo,
    org: "Meta",
    title: "Incoming Enterprise Engineer Intern",
    body: "Summer 2022, Menlo Park",
  },
  {
    logo: CISLogo,
    org: "Cornell CIS",
    title: "CS 1110 Course Consultant",
    body: "Fall 2021, Ithaca",
  },
  {
    logo: ACSULogo,
    org: "ACSU",
    title: "Web Dev Officer",
    body: "Spring 2021-, Ithaca",
  },
  {
    logo: CUSailLogo,
    org: "CUSail",
    title: "Business and Operations Subteam",
    body: "Fall 2020-, Ithaca",
  },
];

const Experience = ({ className }) => {
  return (
    <ExpContainer id="experience">
      <SectionHeading left={true}>experience</SectionHeading>
      <ExpBoxes>
        {ExpData.map((item, index) => {
          return (
            <ExpBox key={index} className={className}>
              <ExpColumn className="expTxt">
                <ExpOrg>{item.org}</ExpOrg>
                <ExpTitle>{item.title}</ExpTitle>
                <ExpBody
                  dangerouslySetInnerHTML={{ __html: item.body }}
                ></ExpBody>
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
  width: 100%;
`;

const ExpBoxes = styled.div``;

const ExpBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto 2% auto;
  padding: 20px;
  width: 90%;
  height: 100%;
  border-radius: 25px;
  align-items: center;
  justify-content: center;

  .expTxt {
    flex: 70%;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .expImg {
    flex: 30%;
    text-align: center;
    @media screen and (max-width: 768px) {
      display: none;
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
`;
const ExpImg = styled.img`
  height: 6rem;
  width: auto;
  align-self: end;

  @media screen and (max-width: 768px) {
    height: 3rem;
  }
`;
