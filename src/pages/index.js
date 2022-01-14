import * as React from "react";

import HomeLayout from "./layouts/HomeLayout";
import Seo from "../components/Seo";
import Hero from "../components/home/Hero";
import Bio from "../components/home/About";
import Experience from "../components/home/Experience";
import Projects from "../components/home/Projects";
import Blog from "../components/home/BlogCards";

const IndexPage = () => (
  <HomeLayout>
    <Seo title="Home" />
    <Hero />
    <Bio />
    <Experience />
    <Projects />
    <Blog />
  </HomeLayout>
);

export default IndexPage;
