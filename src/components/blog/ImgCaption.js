import React from "react";
import styled from "styled-components";

const ImgCaption = (props) => {
  return (
    <div>
      {props.children}
      <Caption>{props.caption}</Caption>
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
