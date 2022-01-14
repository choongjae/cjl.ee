import React from "react";
import styled from "styled-components";

const ImgCaption = ({ children, caption }) => {
  return (
    <div>
      {children}
      <Caption>{caption}</Caption>
    </div>
  );
};

export default ImgCaption;

const Caption = styled.p`
  text-align: center;
  font-size: 16px;
  margin-top: -10px;
  color: darkslategray;
`;
