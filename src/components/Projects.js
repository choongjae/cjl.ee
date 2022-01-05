import React from "react";
import styled from "styled-components";
import GitHubLogo from "../images/github.svg";
import GitHubLogoI from "../images/githubi.svg";
import LinkIcon from "../images/link.svg";
import LinkIconI from "../images/linki.svg";

import { SectionHeading } from "./SectionHeading";

const ProjectData = [
  {
    title: "cjl.ee",
    github: "https://github.com/choongjae/cjl.ee",
    link: "https://cjl.ee/secret",
    description:
      "The website you're looking at right now! Custom designed and built in-house\
      with sweat, tears, and a sizable amount of Googling to remember how flexboxes\
      work. 🥸",
    tools:
      "React, Gatsby, styled-components, Framer Motion, GitHub Pages, Figma",
  },
  {
    title: "OCamlMon",
    github: "https://github.com/choongjae/OCamlMon",
    description:
      "A remake of Pokemon created completely in OCaml using functional \
      programming paradigms. Worked on the battle engine and JSON data storage \
      and retrieval, along with writing an external Python script to convert \
      images into a JSON format.",
    tools: "OCaml",
  },
  {
    title: "Musify",
    github: "https://github.com/zaedaamrin/HackChallenge2021",
    description:
      "Musify is a personalized Android app, where you're able to create your \
      own playlists, add your favorite songs, and play their Youtube videos \
      in the app! Received Honorable Mention for Most Creative App Design in \
      Cornell AppDev's Hack Challenge.",
    tools: "Python, Flask",
  },
  {
    title: "ACSU Website",
    github: "https://github.com/cornellacsu/new_web_react",
    link: "https://acsu.cornell.edu/",
    description:
      "Collaborated with a 5-member team to completely overhaul the website of \
      Cornell's Association of Computer Science Undergraduates. I mainly worked on \
      redesigning the Resources section of the site, which hosts thousands of words \
      for helpful program and course information regarding CS at Cornell. \
      Also drank lots of bubble tea with the team. :)",
    tools: "React",
  },
];

const Icon = (src, link) => {
  return (
    <a href={link} rel="noopener noreferrer">
      <ProjectIcon
        src={src[0]}
        onMouseOver={(e) => (e.currentTarget.src = src[1])}
        onMouseOut={(e) => (e.currentTarget.src = src[0])}
      />
    </a>
  );
};

function Links(obj) {
  console.log(obj.link);
  return (
    <ProjectLinks>
      {obj.github && (
        <ProjectLinkIcon>
          {Icon([GitHubLogo, GitHubLogoI], obj.github)}
        </ProjectLinkIcon>
      )}
      {obj.link && (
        <ProjectLinkIcon>
          {Icon([LinkIcon, LinkIconI], obj.link)}
        </ProjectLinkIcon>
      )}
    </ProjectLinks>
  );
}

const Projects = ({ className }) => {
  return (
    <ProjectContainer id="projects">
      <SectionHeading left={false}>projects</SectionHeading>
      <ProjectBoxes>
        {ProjectData.map((item, index) => {
          return (
            <ProjectDetails key={item.title}>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectLinks>{Links(item)}</ProjectLinks>
              <ProjectDescription>{item.description}</ProjectDescription>
              <ProjectTools>{item.tools}</ProjectTools>
            </ProjectDetails>
          );
        })}
      </ProjectBoxes>
    </ProjectContainer>
  );
};

export default Projects;

const ProjectContainer = styled.div`
  width: 100%;
  margin-top: 5%;
`;

const ProjectBoxes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: auto auto 5% auto;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
const ProjectTitle = styled.h3`
  margin-top: 15px;
`;
const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;
const ProjectLinkIcon = styled.span`
  margin: 0 10px 0 10px;
`;
const ProjectDescription = styled.p`
  margin-top: 10px;
`;
const ProjectTools = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-family: "Fira Code", monospace;
`;

const ProjectIcon = styled.img`
  width: 25px;
`;
