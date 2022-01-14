import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import styled from "styled-components";

function countWords(w) {
  return w.split(" ").length;
}

function addBlanks(x, y) {
  const n = countWords(x);
  const m = countWords(y);
  if (n >= m) {
    return x;
  } else {
    const iter = Math.ceil(m - n);
    // Whitespace characters allow for words to "exist" for transition to happen
    const before = "‎ ".repeat(iter);
    const after = " ‎".repeat(iter);
    return before + x + after;
  }
}

const wordAnimation = {
  hidden: {},
  visible: {},
};

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
      ease: [0.1, 0.35, 0.15, 0.45],
    },
  },
};

function calculateWordDelay(index, arr) {
  let acc = 0;
  for (let i = 0; i < index; i++) {
    acc += arr[i].length;
  }
  return acc * 0.05;
}

const AnimatedName = ({ before, after }) => {
  before = addBlanks(before, after);

  const [name, setName] = useState(before);

  const ctrls = useAnimation();

  async function handleMouse(n) {
    await ctrls.start("hidden");
    setName(n);
    ctrls.start("visible");
  }

  return (
    <AnimatePresence initial={false}>
      <Heading
        onMouseEnter={() => handleMouse(after)}
        onMouseLeave={() => handleMouse(before)}
        aria-label={name}
      >
        {name.split(" ").map((word, index, arr) => (
          <Word
            key={`word-${index}`}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            exit="hidden"
            transition={{
              staggerChildren: 0.05,
              delayChildren: index === 0 ? 0 : calculateWordDelay(index, arr),
            }}
            aria-hidden="true"
          >
            {Array.from(word).map((char, index) => (
              <Character
                key={`char-${index}`}
                variants={characterAnimation}
                aria-hidden="true"
              >
                {char}
              </Character>
            ))}
          </Word>
        ))}
      </Heading>
    </AnimatePresence>
  );
};

export default AnimatedName;

const Heading = styled.h1`
  font-size: 100px;
`;

const Word = styled(motion.div)`
  display: inline-block;
  margin-right: 0.1em;
  margin-left: 0.1em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
`;
