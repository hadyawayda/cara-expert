import React, { useState, useEffect } from "react";

const words = [
  { name: "Hair", len: 160 },
  { name: "Makeover", len: 360 },
  { name: "Beauty", len: 260 },
  { name: "Nails", len: 180 },
  { name: "Makeup", len: 280 },
  { name: "Salons", len: 240 },
];

const TextAnimation = () => {
  const [index, setIndex] = useState(0);
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    const word = words[index].name;
    setCharacters([]);

    word.split("").forEach((char, i) => {
      setTimeout(() => {
        setCharacters((prev) => [...prev, char]);
      }, i * 150);
    });

    const timer = setTimeout(() => {
      setIndex((index + 1) % words.length);
    }, word.length * 150 + 3000);

    return () => clearTimeout(timer);
  }, [index, words]);

  return (
    <div className="text-animation" style={{ width: `${words[index].len}px` }}>
      {characters.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
};

export default TextAnimation;
