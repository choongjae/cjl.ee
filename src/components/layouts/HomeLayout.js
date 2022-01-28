import * as React from "react";

import Header from "../Header";
// import { ThemeProvider } from "./ThemeContext";
// import GlobalStyle from "./GlobalStyle";

const HomeLayout = ({ children }) => {
  return (
    // <ThemeProvider>
    <>
      <Header></Header>
      <main>{children}</main>
    </>
    // </ThemeProvider>
  );
};

export default HomeLayout;
