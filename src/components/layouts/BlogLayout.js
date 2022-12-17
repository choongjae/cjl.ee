import React from "react";
import { Link } from "gatsby";
// import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import DarkToggle from "../DarkToggle";
import Header from "../Header";

const BlogLayout = ({ children }) => {
  return (
    <>
      {/* <BlogHome>
        <BlogLink to={"/"}>🏠</BlogLink>
        <BlogLink to={"/blog"}>📖</BlogLink>
      </BlogHome> */}
      <Header />
      {/* <BlogDarkToggle /> */}
      <BlogContainer>{children}</BlogContainer>
    </>
  );
};

export default BlogLayout;

const BlogHome = styled.div`
  width: 200px;
  height: auto;
  margin: 10px auto -60px auto;
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
    background: var(--color-hover);
  }
`;

const BlogContainer = styled.div`
  width: min(720px, 80%);
  ${'' /* margin: 75px auto 75px auto; */}
  margin: auto;
  ${'' /* background: var(--color-blog); */}
  border-radius: 20px;
  ${'' /* margin-top: 75px; */}
`;

const BlogDarkToggle = styled(DarkToggle)`
  overflow: visible !important;
  top: 15px;
  left: 85%;
  position: relative;
`;
