import React from "react"
import styled from "styled-components"

import MetaLogo from "../images/Meta.png"
import CISLogo from "../images/cornell.png"
import ACSULogo from "../images/acsu.png"
import CUSailLogo from "../images/CUSail.png"

const ExpData = [
  {
    logo: MetaLogo,
    title: "Incoming Enterprise Engineer Intern",
    body: "Summer 2022, Menlo Park",
  },
  {
    logo: CISLogo,
    title: "CS 1110 Course Consultant",
    body: "Fall 2021, Ithaca",
  },
  {
    logo: ACSULogo,
    title: "Web Dev Officer",
    body: "Spring 2021-, Ithaca",
  },
  {
    logo: CUSailLogo,
    title: "Business and Operations Subteam",
    body: "Fall 2020-, Ithaca",
  },
]

const Experience = () => {
  return (
    <ExpContainer>
      <ExpHeading>Experience</ExpHeading>
      <ExpBoxes>
        {ExpData.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <ExpBox key={index}>
                <ExpColumn>
                  <ExpImg src={item.logo} />
                </ExpColumn>
                <ExpColumn>
                  <ExpTitle>{item.title}</ExpTitle>
                  <ExpBody>{item.body}</ExpBody>
                </ExpColumn>
              </ExpBox>
            )
          } else {
            return (
              <ExpBox key={index}>
                <ExpColumn>
                  <ExpTitle>{item.title}</ExpTitle>
                  <ExpBody>{item.body}</ExpBody>
                </ExpColumn>
                <ExpColumn>
                  <ExpImg src={item.logo} />
                </ExpColumn>
              </ExpBox>
            )
          }
        })}
      </ExpBoxes>
    </ExpContainer>
  )
}

export default Experience

const ExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
`
const ExpHeading = styled.h1`
  font-size: clamp(2rem, 5vw, 6rem);
  text-align: center;
`

const ExpBoxes = styled.div``

const ExpBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5% auto 5% auto;
  padding: 20px;
  width: 80%;
  height: 7rem;
  border-radius: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
  ${
    "" /* border-style: solid;
  border-width: 1px; */
  }
`

const ExpColumn = styled.div`
  flex: 50%;
`

const ExpImg = styled.img`
  ${"" /* max-width: 40%; */}
  height: 6rem;
  width: auto;
  align-self: end;

  @media screen and (max-width: 768px) {
    height: 3rem;
  }
`
const ExpDesc = styled.div``
const ExpTitle = styled.h2`
  font-size: clamp(1rem, 2.5vw, 2rem);
`
const ExpBody = styled.p`
  ${"" /* margin-top: 5%; */}
  font-size: clamp(0.75rem, 2vw, 2rem);
`
