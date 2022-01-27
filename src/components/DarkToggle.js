import React from "react";
import { ThemeContext } from "./layouts/ThemeContext";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkToggle = ({ className }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  if (!colorMode) {
    return null;
  }

  return (
    // <label>
    //   {" "}
    //   <input
    //     type="checkbox"
    //     checked={colorMode === "dark"}
    //     onChange={(ev) => {
    //       setColorMode(ev.target.checked ? "dark" : "light");
    //     }}
    //   />{" "}
    //   Dark
    // </label>

    <DarkModeToggle
      onChange={(ev) => {
        // console.log(ev);
        setColorMode(ev ? "dark" : "light");
      }}
      checked={colorMode === "dark"}
      size={40}
      className={className}
    ></DarkModeToggle>
  );
};

export default DarkToggle;
