import * as React from "react";

import Layout from "../components/layouts/HomeLayout";
import Seo from "../components/Seo";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 style={{ marginTop: "5vw", textAlign: "center" }}>404: Not Found</h1>
    <p style={{ textAlign: "center" }}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <a
      style={{ display: "block", textAlign: "center", fontSize: "20px" }}
      href="/"
    >
      Return to the main page.
    </a>
  </Layout>
);

export default NotFoundPage;
