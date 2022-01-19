import React from "react";

import { ThemeProvider } from "./layouts/ThemeContext";
import GlobalStyle from "./layouts/GlobalStyle";

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default App;
