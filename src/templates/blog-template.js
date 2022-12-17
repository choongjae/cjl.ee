import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import BlogLayout from "../components/layouts/BlogLayout";
import Seo from "../components/Seo";
import ImgCaption from "../components/blog/ImgCaption";

const BlogP = styled.p`
  margin: 15px 0 15px 0;
  ${'' /* font-family: 'Roboto'; */}
`;
const BlogUl = styled.ul`
  margin-left: 25px;
`;

const components = { p: BlogP, ul: BlogUl, ImgCaption };

const BlogPost = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlogLayout>
        <Seo title={data.mdx.frontmatter.title}></Seo>
        <BlogHeader>
          <BlogTitle>{data.mdx.frontmatter.title}</BlogTitle>
          <BlogDetails>
            <BlogDate>{data.mdx.frontmatter.date}</BlogDate>
            <BlogDot>·</BlogDot>
            <BlogTags>
              {data.mdx.frontmatter.tags.map((tag) => (
                <BlogTag key={tag}>{tag}</BlogTag>
              ))}
            </BlogTags>
          </BlogDetails>
        </BlogHeader>
        <BlogBody>
          <BlogContent>{data.mdx.body}</BlogContent>
        </BlogBody>
      </BlogLayout>
    </MDXProvider>
  );
};

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        tags
        emoji
        image
      }
      body
    }
  }
`;

export default BlogPost;

const BlogHeader = styled.div``;

const BlogTitle = styled.h1`
  ${"" /* font-size: 64px; */}
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

const BlogDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const BlogDate = styled.p`
  padding: 0 5px 0 5px;
  margin-right: 10px;
  font-family: "Fira Code", monospace;
  font-size: 18px;
  background: var(--color-blog2);
  border-radius: 5px;
  width: auto;
`;
const BlogTags = styled.p`
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
const BlogTag = styled.span`
  padding: 0 5px 0 5px;
  margin: 0 10px 0 0;
  font-family: "Fira Code", monospace;
  ${"" /* font-size: 18px; */}
  background: var(--color-blog2);
  border-radius: 5px;
`;
const BlogDot = styled.span`
  ${"" /* margin: 0 10px 0 10px; */}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BlogBody = styled.div`
  padding: 0 25px 25px 25px;
  font-family: 'Roboto';
  ${
    "" /* #parent * {
    margin-bottom: 15px;
  } */
  }
`;
const BlogContent = styled(MDXRenderer)`
  > * {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }

  li {
    margin-left: 15px;
  }
`;
