import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Bio from "../components/About";
import Blog from "../components/BlogCards";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Bio />

    <Experience />
    <Projects />
    <Blog />
  </Layout>
);

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

export default IndexPage;
