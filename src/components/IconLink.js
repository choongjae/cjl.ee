import { Link } from "gatsby";
import React from "react";

export default function IconLink({ className, src, link, alt }) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        onMouseOver={(e) => (e.currentTarget.querySelector("img").src = src[1])}
        onFocus={(e) => (e.currentTarget.querySelector("img").src = src[1])}
        onMouseOut={(e) => (e.currentTarget.querySelector("img").src = src[0])}
        onBlur={(e) => (e.currentTarget.querySelector("img").src = src[0])}
      >
        <img src={src[0]} style={{ width: "100%" }} alt={alt} />
      </a>
    </span>
  );
}
