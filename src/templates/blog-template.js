import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import styled, { createGlobalStyle } from "styled-components";
import BlogLayout from "../components/layouts/BlogLayout";
import Seo from "../components/Seo";
import ImgCaption from "../components/blog/ImgCaption";
import SongFeature from "../components/blog/SongFeature";

// consts

const BlogGlobalStyle = createGlobalStyle`
* {
  font-family: 'Open Sans';
}

p {
  margin: 15px 0 15px 0;
  font-size: 16px
}

ul {
  margin-left: 25px;
}

li {
  font-size: 16px
}

h1 {
  font-size: 30px;
  ${"" /* margin-bottom: 15px; */}
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

a {
  color: var(--color-hyperlink);
}

iframe {
  width: 100%;
}
`;

// const BlogP = styled.p`;
//   margin: 15px 0 15px 0;
//   font-size: 16px;
// `;

// const BlogA = styled.a`
//   font-family: "Open Sans";
//   color: blue;
// `;

// const BlogStrong = styled.strong`
//   font-family: "Open Sans";
// `;

const BlogUl = styled.ul`
  margin-left: 25px;
`;

const BlogLi = styled.li`
  font-family: "Open Sans";
  font-size: 16px;
`;

// const BlogH1 = styled.h1`
//   font-family: "Open Sans";
//   font-size: 30px;
//   font-weight: normal;
//   margin-bottom: 15px;
// `;

// const BlogH2 = styled.h2`
//   font-family: "Open Sans";
//   font-size: 24px;
//   font-weight: normal;
//   margin-bottom: 15px;
// `;

const components = { ImgCaption, SongFeature };
// const components = { p: BlogP, ul: BlogUl, a: BlogA, strong: BlogStrong, li: BlogLi, h1: BlogH1, h2: BlogH2, ImgCaption };

const BlogPost = ({ data }) => {
  return (
    <>
      <BlogGlobalStyle />
      <MDXProvider components={components}>
        <BlogLayout headerType={2}>
          <Seo title={data.mdx.frontmatter.title}></Seo>
          <BlogHeader>
            <BlogTitle>{data.mdx.frontmatter.title}</BlogTitle>
            <BlogDetails>
              <BlogDate>{data.mdx.frontmatter.date}</BlogDate>
              {/* <BlogDot>·</BlogDot>
            <BlogTags>
              {data.mdx.frontmatter.tags.map((tag) => (
                <BlogTag key={tag}>{tag}</BlogTag>
              ))}
            </BlogTags> */}
            </BlogDetails>
          </BlogHeader>
          <BlogBody>
            <BlogContent>{data.mdx.body}</BlogContent>
          </BlogBody>
        </BlogLayout>
      </MDXProvider>
    </>
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
  font-family: "EB Garamond";
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
  margin: 5px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const BlogDate = styled.p`
  padding: 0 5px 0 5px;
  margin: 0px;
  font-family: "Inconsolata";
  font-size: 18px;
  ${"" /* background: var(--color-blog2); */}
  color: #808080;
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
