import { useState, useEffect } from "react";

const calculateAge = (birthdate) => {
  return (Date.now() - birthdate) / 31536000000;
};

const Age = (birthdate) => {
  const [time, setTime] = useState(calculateAge(birthdate));

  useEffect(() => {
    const interval = setInterval(() => setTime(calculateAge(birthdate)), 25);
    return () => {
      clearInterval(interval);
    };
  }, [birthdate]);
  // includes birthdate in dependency array because of warning, but is still optimized I think (doesn't run every render)
  return time.toString().slice(0, 12);
};

export default Age;
