import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Bio from "../components/About";
import Experience from "../components/Experience";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Bio />
    <Experience />
  </Layout>
);

export default IndexPage;
