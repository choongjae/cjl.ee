import React from "react";
import { Link } from "gatsby";

const InlineLink = ({ text, color, link }) => {
  return (
    <Link to={link} style={{ color: color }}>
      {text}
    </Link>
  );
};

export default InlineLink;
