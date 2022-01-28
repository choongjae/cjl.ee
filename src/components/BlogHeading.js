import React, { useContext } from "react";
import styled from "styled-components";

import blogword from "../images/blog.png";
import blogwordw from "../images/blogw.png";
import { ThemeContext } from "./layouts/ThemeContext";

const BlogHeading = () => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <BlogHeader>
      <BlogImg src={colorMode === "light" ? blogword : blogwordw}></BlogImg>
    </BlogHeader>
  );
};

export default BlogHeading;

const BlogHeader = styled.h1`
  text-align: center;
`;

const BlogImg = styled.img`
  ${"" /* display: block; */}
  height: 125px;
  width: auto;
  margin: 25px auto 0 auto;
`;
