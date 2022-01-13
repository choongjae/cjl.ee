import React from "react";
import { Link } from "gatsby";
import { GlobalStyle } from "../components/GlobalStyle";
import styled from "styled-components";

const BlogLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BlogHome>
        <BlogLink to={"/"}>🏠</BlogLink>
        <BlogLink to={"/blog"}>📖</BlogLink>
      </BlogHome>
      <BlogContainer>{children}</BlogContainer>
    </>
  );
};

export default BlogLayout;

const BlogHome = styled.div`
  width: 200px;
  margin: 40px auto -60px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const BlogLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 50px;
  margin: 0 10px 0 10px;
  border-radius: 20px;
  padding: 0 10px 0 10px;

  :hover {
    background: #fcd8a9;
  }
`;

const BlogContainer = styled.div`
  width: min(680px, 80%);
  margin: 75px auto 75px auto;
  background: #ffe2bd;
  border-radius: 20px;
  margin-top: 75px;
`;
