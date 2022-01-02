import React, { useState, useEffect } from "react"

const descriptors = [
  "College Student",
  "Computer Science Major",
  "Sleeping Minor",
  "Technologist-in-Training",
  "Korean-American 🇰🇷🇺🇸",
  "Computer Lover",
  "Oklahomon",
  "Red Big Cornellian",
]

const ChangingText = () => {
  const [descript, setDescript] = useState(0)

  useEffect(() => {
    const update = setTimeout(() => {
      setDescript((descript + 1) % descriptors.length)
      console.log("changed")
    }, 3500)
    return () => clearInterval(update)
  }, [descript])

  return <span>{descriptors[descript]}</span>
}

export default ChangingText
