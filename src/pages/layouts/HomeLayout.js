import * as React from "react";

import Header from "../../components/Header";
import GlobalStyle from "./GlobalStyle";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
