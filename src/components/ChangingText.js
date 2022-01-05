import React, { useState, useEffect } from "react";

const descriptors = [
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
];

const ChangingText = () => {
  const [descript, setDescript] = useState(0);

  useEffect(() => {
    const update = setTimeout(() => {
      setDescript((descript + 1) % descriptors.length);
    }, 3500);
    return () => clearInterval(update);
  }, [descript]);

  return descriptors[descript];
};

export default ChangingText;
