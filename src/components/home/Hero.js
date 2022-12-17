import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import AnimatedName from "../AnimatedName";

import Logo from "/static/logo.svg";

const titleOptions = {
  strings: [
    "Junior @ Cornell",
    "Computer Science Major",
    "Sleeping Minor",
    "Technologist-in-Training",
    "Korean-American",
    "Computador",
    "Oklahomon",
    "Cookie Lover",
    "Milk Aficionado",
    "Like and Bookmark!",
    "or don't.... :(",
    "Have a great day!",
    "Romanticize your life :)",
  ],
  autoStart: true,
  loop: true,
};

const Hero = ({ className }) => {
  return (
    <HContainer className={className + " bg"}>
      <HColumn className="hTxt">
        <AnimatedName before="CJ Lee" after="Choong Jae Lee" />
        <HTitle>
          <Typewriter options={titleOptions} />
        </HTitle>
      </HColumn>
      <HColumn className="hImg">
        <HImage src={Logo} />
      </HColumn>
    </HContainer>
  );
};

export default Hero;

const HContainer = styled.div`
  min-height: max(550px, 100vh);
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: min(100%,1400px);
  margin: -75px auto auto auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .hTxt {
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const HColumn = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  }
`;

const HImage = styled.img`
  max-width: 75%;
`;

const HTitle = styled.h3`
  * {
    font-family: "Fira Code", monospace;
    margin-top: 10px;
  }
`;
