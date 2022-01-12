import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { SectionHeading } from "./SectionHeading";

const BlogCards = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            tags
            emoji
            image
            subtitle
          }
          id
          body
          slug
        }
      }
    }
  `);

  return (
    <BlogContainer id="blog">
      <SectionHeading left={true}>blog</SectionHeading>
      <BlogCardContainer>
        {/* <BlogArticles> */}
        {data.allMdx.nodes.map((node) => (
          <BlogLink to={"/blog/" + node.slug}>
            <BlogArticle key={node.id}>
              <BlogHead>
                <BlogEmoji>{node.frontmatter.emoji}</BlogEmoji>
                <BlogCard>
                  <BlogArticleHeader>
                    {node.frontmatter.title}
                  </BlogArticleHeader>
                  <p>{node.frontmatter.date}</p>
                </BlogCard>
              </BlogHead>
              <BlogFoot>
                <BlogArticleSubtitle>
                  {node.frontmatter.subtitle}
                </BlogArticleSubtitle>
              </BlogFoot>
            </BlogArticle>
          </BlogLink>
        ))}
        {/* </BlogArticles> */}
      </BlogCardContainer>
      <BlogMore>
        <BlogButton to={"/blog"}>read more</BlogButton>
      </BlogMore>
    </BlogContainer>
  );
};

export default BlogCards;

const BlogContainer = styled.div`
  height: 100%;
  margin-bottom: 100px;
`;
const BlogCardContainer = styled.div`
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: min(800px, 90%);
`;

const BlogArticles = styled.div`
  background: #ffe2bd;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const BlogLink = styled(Link)`
  color: inherit;
  margin: 20px 0 20px 0;
  ${"" /* padding: 30px; */}
  border-radius:20px
`;

const BlogArticle = styled.div`
  display: flex;
  flex-direction: row;
  ${"" /* margin: 30px auto 30px auto; */}
  justify-content: center;
  padding: 15px;
  border-radius: 20px;

  :hover {
    background: #fcd8a9;
  }
`;

const BlogEmoji = styled.div`
  margin: 25px;
  font-size: 30px;
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BlogArticleHeader = styled.h4`
  word-break: break-word;
`;
const BlogHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: 25px;
`;
const BlogFoot = styled.div`
  margin: auto;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BlogArticleSubtitle = styled.p`
  text-align: center;
`;

const BlogMore = styled.div`
  width: 200px;
  margin: auto;
  ${"" /* margin: auto 100px auto auto; */}

  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;
const BlogButton = styled(Link)`
  display: block;
  text-align: center;
  font-size: 40px;
  color: inherit;
  border-radius: 20px;

  :hover {
    background: #fcd8a9;
  }
`;
