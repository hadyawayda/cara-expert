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
    let newCharacters: string[] = [];

    word.split("").forEach((char, i) => {
      setTimeout(() => {
        newCharacters.push(char);
        setCharacters([...newCharacters]);
      }, i * 100);
    });

    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, word.length * 350 + 1500);

    return () => {
      clearTimeout(timer);
      newCharacters = [];
    };
  }, [index]);

  return (
    <div
      className="text-animation overflow-hidden break-words h-24 flex items-center p-1"
      style={{
        width: `${words[index].len}px`,
      }}
    >
      {characters.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  );
};

export default TextAnimation;
