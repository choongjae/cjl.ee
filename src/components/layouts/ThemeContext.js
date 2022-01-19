import React from "react";

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "../constants";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// import React from "react";
// import { COLORS } from "../constants";

// export const ThemeContext = React.createContext();

// export const ThemeProvider = ({ children }) => {
//   const [colorMode, rawSetColorMode] = React.useState(undefined);
//   React.useEffect(() => {
//     const root = window.document.documentElement;
//     const initialColorValue = root.style.getPropertyValue(
//       "--initial-color-mode"
//     );
//     rawSetColorMode(initialColorValue);
//     console.log("loaded");
//   }, []);
//   function setColorMode(newValue) {
//     const root = window.document.documentElement;
//     // 1. Update React color-mode state
//     rawSetColorMode(newValue);
//     // 2. Update localStorage
//     window.localStorage.setItem("color-mode", newValue);
//     // 3. Update each color

//     Object.entries(COLORS).forEach(([name, colorByTheme]) => {
//       const cssVarName = `--color-${name}`;

//       root.style.setProperty(cssVarName, colorByTheme[newValue]);
//     });

//   }
//   return (
//     <ThemeContext.Provider value={{ colorMode, setColorMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
