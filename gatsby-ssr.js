import React from "react";
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/components/constants";

import App from "./src/components/App";
import { ThemeProvider } from "./src/components/layouts/ThemeContext";

function setColorsByTheme() {
  const colors = "🌈";
  const colorModeKey = "🔑";
  const colorModeCssProp = "⚡️";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = window.localStorage.getItem(colorModeKey);

  let colorMode = "light";

  const hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light";
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  console.log(colors);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    console.log(`Adding color ${cssVarName}`);
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

// THE ORDER OF QUOTATION MARKS ON THE RAINBOW IS VERY IMPORTANT

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  const codeToRunOnClient = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
      `--color-text: black;
      --color-background: white;`
    */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ""
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
