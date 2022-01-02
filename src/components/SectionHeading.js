import styled from "styled-components"

export const SectionHeading = styled.h1`
  position: relative;
  font-size: 50px;
  margin-left: 25px;
  margin-right: 25px;
  text-align: ${({ left }) => (left ? "left" : "right")};
`
