import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import ChangingText from "./ChangingText";
import Logo from "/static/logo.svg";

const HWord = styled(motion.div)`
  display: inline-block;
  margin-right: 0.1em;
  margin-left: 0.1em;
  white-space: nowrap;
  background: transparent;
`;

const HCharacter = styled(motion.span)`
  display: inline-block;
  background: transparent;
`;

const Hero = ({ className }) => {
  //   const animating = useRef(false)
  //   const [descript, setDescript] = useState(0)

  //   useEffect(() => {
  //     const update = setTimeout(() => {
  //       setDescript((descript + 1) % descriptors.length)
  //       console.log("changed")
  //     }, 3500)
  //     return () => clearInterval(update)
  //   }, [descript])
  let titleText = ChangingText();

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const [name, setName] = useState("‎ CJ Lee ‎"); //A necessary evil? ;(

  const ctrls = useAnimation();

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: "0.2em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 0.1,
        // ease: [0.2, 0.65, 0.3, 0.9],
        ease: [0.1, 0.35, 0.15, 0.45],
        // ease: "linear",
      },
    },
  };

  async function handleMouse(n) {
    // if (!animating.current) {
    // animating.current = true
    await ctrls.start("hidden");
    setName(n);
    ctrls.start("visible");
    // animating.current = false
    // }
  }

  function calculateWordDelay(index, arr) {
    let acc = 0;
    for (let i = 0; i < index; i++) {
      acc += arr[i].length;
    }
    return acc * 0.05;
  }

  return (
    <HContainer className={className + " bg"}>
      <HColumn className="hTxt">
        <AnimatePresence initial={false}>
          <HName
            onMouseEnter={() => handleMouse("Choong Jae Lee")}
            onMouseLeave={() => handleMouse("‎ CJ Lee ‎")}
            aria-label={name}
          >
            {name.split(" ").map((word, index, arr) => (
              <HWord
                key={`word-${index}`}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                exit="hidden"
                transition={{
                  staggerChildren: 0.05,
                  delayChildren:
                    index === 0 ? 0 : calculateWordDelay(index, arr),
                }}
                aria-hidden="true"
              >
                {Array.from(word).map((char, index) => (
                  <HCharacter
                    key={`char-${index}`}
                    variants={characterAnimation}
                    aria-hidden="true"
                  >
                    {char}
                  </HCharacter>
                ))}
              </HWord>
            ))}
          </HName>
        </AnimatePresence>
        {/* <HTitle>{titleText}</HTitle> */}
        <HTitle>
          <HTitleTypewriter
            options={{
              strings: [
                "Sophomore @ Cornell",
                "Computer Science Major",
                "Sleeping Minor",
                "Technologist-in-Training",
                "Korean-American",
                "Computador",
                "Oklahomon",
                "Red Big Cornellian",
                "Cookie Lover",
                "Milk Aficionado",
                "Based around NYC",
                "Like and Bookmark!",
                "or don't.... :(",
                "Have a great day!",
                "Romanticize your life :)",
              ],
              autoStart: true,
              loop: true,
            }}
            skipAddStyles={true}
            style={{
              fontSize: "48px",
              fontFamily: "Fira Coda, monospace",
              marginTop: "10px",
            }}
          />
        </HTitle>
      </HColumn>
      <HColumn className="hImg">
        <HImage src={Logo} />
      </HColumn>
    </HContainer>
  );
};

export default Hero;

const HContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: min(100%,1400px);
  margin:auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  .hTxt {
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const HColumn = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  }
`;

const HImage = styled.img`
  max-width: 75%;
  height: auto;
`;

const HName = styled.h1``;

const HTitleTypewriter = styled(Typewriter)`
  font-family: "Fira Code", monospace;
  margin-top: 10px;
`;

const HTitle = styled.h3`
  * {
    font-family: "Fira Code", monospace;
    margin-top: 10px;
  }
`;
