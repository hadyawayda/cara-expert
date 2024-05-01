import React, { useState, useEffect } from "react";
import "./TextAnimation.css"; // Import your CSS for styling

const TextAnimation = ({
  words,
  rotationInterval = 3000,
}: {
  words: string[];
  rotationInterval: number;
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const word = words[currentWord];
    setCharacters([]);

    word.split("").forEach((char, index) => {
      setTimeout(() => {
        setCharacters((prev) => [...prev, char]);
      }, index * 50);
    });

    const timer = setTimeout(() => {
      setCurrentWord((currentWord + 1) % words.length);
    }, word.length * 50 + rotationInterval);

    return () => clearTimeout(timer);
  }, [currentWord, words, rotationInterval]);

  return (
    <div className="text-animation">
      {characters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default TextAnimation;
