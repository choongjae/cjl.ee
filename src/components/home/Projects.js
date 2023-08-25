import React from "react";
import styled from "styled-components";

import HoverIcon from "../IconLink";
import SectionHeading from "../SectionHeading";
import { ThemeContext } from "../layouts/ThemeContext";

import projects from "../../images/projects.png";
import projectsw from "../../images/projectsw.png";
import GitHubLogo from "../../images/github.svg";
import GitHubLogoI from "../../images/githubi.svg";
import LinkIcon from "../../images/link.svg";
import LinkIconI from "../../images/linki.svg";
import GitHubLogoW from "../../images/githubw.svg";
import GitHubLogoWI from "../../images/githubwi.svg";
import LinkIconW from "../../images/linkw.svg";
import LinkIconWI from "../../images/linkwi.svg";

const ProjectData = [
  // {
  //   title: "cjl.ee",
  //   github: "https://github.com/choongjae/cjl.ee",
  //   // link: "https://cjl.ee/secret",
  //   description: "The website you're looking at right now! Custom designed and built in-house\
  //     with sweat, tears, and a sizable amount of Googling to remember how flexboxes\
  //     work. 🥸",
  //   tools: "React, Gatsby, GraphQL, styled-components, Framer Motion, GitHub Pages, Figma",
  // },
  {
    title: "9 Lives",
    github: "https://github.com/studiosstudios/nine-lives",
    link: "https://gdiac.cs.cornell.edu/gdiac/showcase/gallery/ninelives/",
    description: "Play as a cat in this puzzle-platformer game where dying is OK! \
      Use your past corpses to solve puzzles and beat challenges in the immersive world, \
      and leverage the power of your magic bell to swap your soul into other corpses. \
      Created with the hard effort of 9 team members using Java's LibGDX Engine, won \
      Most Polished Game at Cornell GDIAC's Spring 2023 Showcase.",
    tools: "Java, LibGDX",
  },
  {
    title: "OCamlMon",
    github: "https://github.com/choongjae/OCamlMon",
    description: "A remake of Pokemon created completely in OCaml using functional \
      programming paradigms. Worked on the battle engine and JSON data storage \
      and retrieval, along with writing an external Python script to convert \
      images into a JSON format.",
    tools: "OCaml",
  },
  {
    title: "Musify",
    github: "https://github.com/zaedaamrin/HackChallenge2021",
    description: "Musify is a personalized Android app, where you're able to create your \
      own playlists, add your favorite songs, and play their Youtube videos \
      in the app! Received Honorable Mention for Most Creative App Design in \
      Cornell AppDev's Hack Challenge.",
    tools: "Python, Flask",
  },
  {
    title: "ACSU Website",
    github: "https://github.com/cornellacsu/new_web_react",
    link: "https://acsu.cornell.edu/",
    description: "Collaborated with a 5-member team to completely overhaul the website of \
      Cornell's Association of Computer Science Undergraduates. I mainly worked on \
      redesigning the Resources section of the site, which hosts thousands of words \
      for helpful program and course information regarding CS at Cornell. \
      Also drank lots of bubble tea with the team. :)",
    tools: "React",
  },
];

function Links(obj, colorMode) {
  return (
    <ProjectLinks>
      {obj.github && (
        <ProjectLinkIcon>
          <ProjectIcon src={colorMode === "light" ? [GitHubLogo, GitHubLogoI] : [GitHubLogoW, GitHubLogoWI]} link={obj.github} />
        </ProjectLinkIcon>
      )}
      {obj.link && (
        <ProjectLinkIcon>
          <ProjectIcon src={colorMode === "light" ? [LinkIcon, LinkIconI] : [LinkIconW, LinkIconWI]} link={obj.link} />
        </ProjectLinkIcon>
      )}
    </ProjectLinks>
  );
}

const Projects = ({ className }) => {
  const { colorMode } = React.useContext(ThemeContext);

  return (
    <ProjectContainer id="projects">
      {/* <SectionHeading left={false}>projects</SectionHeading> */}
      {SectionHeading(true, [projects, projectsw], true)}
      <ProjectBoxes>
        {ProjectData.map((item, index) => {
          return (
            <ProjectDetails key={item.title}>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectLinks>{Links(item, colorMode)}</ProjectLinks>
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
  margin: auto auto 75px auto;
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

// const ProjectIcon = styled.img`
//   width: 25px;
// `;

const ProjectIcon = styled(HoverIcon)`
  width: 25px;
`;
