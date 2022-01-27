import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import { FaBars } from "react-icons/fa";
// import scrollTo from "gatsby-plugin-smoothscroll"

import DarkToggle from "./DarkToggle";

const navData = [
  { title: "about", link: "/#about" },
  { title: "experience", link: "/#experience" },
  { title: "projects", link: "/#projects" },
  { title: "blog", link: "/#blog" },
];

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const showing = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scroll && showing.current) {
        showing.current = false;
      }
      if (
        (window.scrollY < scroll && !showing.current) ||
        window.scrollY < 50
      ) {
        showing.current = true;
      }
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <Nav show={showing.current}>
      {/* <Bars /> */}
      <NavMenu>
        {navData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavToggle />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 75px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  background: var(--color-background);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: ${(props) => (props.show ? "0px" : "-100px")};
  transition: margin-top 0.5s;
`;

// const Bars = styled(FaBars)`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 100%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// position absolute for dark mode toggle positioning
const NavMenu = styled.div`
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 100%;
  width: 100%;
`;

const NavLink = styled(AnchorLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-align: center;
  font-size: 24px;
  color: var(--color-text);
  ${"" /* background: rgba(255, 229, 194, 0.5); */}
  ${"" /* background: var(--color-background); */}
  ${"" /* box-shadow: 1px 2px 2px black; */}

  &:first-child {
    border-radius: 0 0 0 25px;
  }

  &:last-child {
    border-radius: 0 0 25px 0;
  }
  @media screen and (max-width: 475px) {
    font-size: 18px;
  }
`;

// position relative for positioning wrt navmenu
// overflow visible important to avoid cutting off edges
const NavToggle = styled(DarkToggle)`
  position: relative;
  top: 30px;
  left: 90%;

  overflow: visible !important;

  background: var(--color-background);
  border-radius: 5px;

  @media screen and (max-width: 475px) {
    top: 70px;
    left: 47%;
  }
  ${"" /*So that the edges don't get cut off */}

  ${
    "" /* button {
    overflow: visible !important;
  } */
  }
`;
