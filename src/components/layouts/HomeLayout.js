import * as React from "react";
import Header from "../Header";


const HomeLayout = ({ children }) => {
  return (
    // <ThemeProvider>
    <>
      <Header type={0}/>
      <main>{children}</main>
    </>
    // </ThemeProvider>
  );
};

export default HomeLayout;
