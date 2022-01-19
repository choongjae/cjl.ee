import React from "react";

import App from "./src/components/App";
// import { ThemeProvider } from "./src/components/layouts/ThemeContext";

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
