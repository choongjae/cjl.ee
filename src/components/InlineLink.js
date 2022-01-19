import React from "react";
import { Link } from "gatsby";

const InlineLink = ({ text, color, link }) => {
  return (
    <a href={link} style={{ color: color }}>
      {text}
    </a>
  );
};

export default InlineLink;
