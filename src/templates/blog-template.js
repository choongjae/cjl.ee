import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import BlogLayout from "../components/BlogLayout";

const BlogPost = ({ data }) => {
  return (
    <BlogLayout>
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
  font-size: 64px;
  text-align: center;
`;

const BlogDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px;
`;
const BlogDate = styled.p`
  padding: 0 5px 0 5px;
  margin-right: 10px;
  font-family: "Fira Code", monospace;
  font-size: 18px;
  background: #fcd8a9;
  border-radius: 5px;
`;
const BlogTags = styled.p`
  margin-left: 10px;
`;
const BlogTag = styled.span`
  padding: 0 5px 0 5px;
  margin: 0 10px 0 0;
  font-family: "Fira Code", monospace;
  ${"" /* font-size: 18px; */}
  background: #fcd8a9;
  border-radius: 5px;
`;
const BlogDot = styled.span`
  ${"" /* margin: 0 10px 0 10px; */}
`;
const BlogBody = styled.div`
  padding: 0 25px 25px 25px;
  #parent * {
    margin-bottom: 15px;
  }
`;
const BlogContent = styled(MDXRenderer)`
  > * {
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }
`;
