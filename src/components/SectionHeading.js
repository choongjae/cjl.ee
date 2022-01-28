import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./layouts/ThemeContext";

const SectionHeading = (left, src, adjust) => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <Heading left={left}>
      <Title src={src[colorMode === "light" ? 0 : 1]} adjust={adjust} />
    </Heading>
  );
};

export default SectionHeading;

const Heading = styled.h2`
  position: relative;
  font-size: 50px;
  margin-left: 25px;
  margin-right: 25px;
  text-align: ${({ left }) => (left ? "left" : "right")};
`;

const Title = styled.img`
  display: inline-block;
  height: 75px;
  width: auto;
  margin-bottom: ${({ adjust }) => (adjust ? "-25px" : "0px")};
`;
