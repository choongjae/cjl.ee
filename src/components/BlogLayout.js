import React from "react";
import { GlobalStyle } from "../components/GlobalStyle";
import styled from "styled-components";

const BlogLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BlogContainer>{children}</BlogContainer>
    </>
  );
};

export default BlogLayout;

const BlogContainer = styled.div`
  width: 680px;
  margin: auto;
  background: #ffe2bd;
  border-radius: 20px;
  margin-top: 75px;
`;
