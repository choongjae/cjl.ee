import React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/Seo";
import styled from "styled-components";
import BlogLayout from "../components/layouts/BlogLayout";

const blog = ({ data }) => {
  return (
    <BlogLayout>
      <Seo title="Blog"></Seo>
      <BlogHeader>blog</BlogHeader>
      <BlogForm>
        <BlogSearch></BlogSearch>
      </BlogForm>
      <BlogArticles>
        {data.allMdx.nodes.map((node) => (
          <BlogLink to={"/blog/" + node.slug}>
            <BlogArticle key={node.id}>
              <BlogEmoji>{node.frontmatter.emoji}</BlogEmoji>
              <BlogCard>
                <BlogArticleHeader>{node.frontmatter.title}</BlogArticleHeader>
                <p>{node.frontmatter.date}</p>
              </BlogCard>
            </BlogArticle>
          </BlogLink>
        ))}
      </BlogArticles>
    </BlogLayout>
    // </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          tags
          emoji
          image
        }
        id
        body
        slug
      }
    }
  }
`;

export default blog;

const BlogHeader = styled.h1`
  text-align: center;
`;

const BlogForm = styled.form``;

const BlogSearch = styled.input`
  ${"" /* display: block; */}
  display: none; /* Still in development */
  margin: 25px auto 25px auto;
  width: 400px;
`;

const BlogArticles = styled.div`
  ${"" /* width: 680px; */}

  background: #ffe2bd;
  border-radius: 20px;
`;

const BlogLink = styled(Link)`
  color: inherit;
`;

const BlogArticle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${"" /* height: 100px; */}
  height:auto;
  border-radius: 20px;
  padding: 10px 0 10px 0;
  :hover {
    background: #fcd8a9;
  }
`;

const BlogEmoji = styled.div`
  margin: 25px;
  font-size: 30px;
`;

const BlogCard = styled.div``;

const BlogArticleHeader = styled.h4``;
