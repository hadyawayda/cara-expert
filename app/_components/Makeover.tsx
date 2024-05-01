import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Makeover = () => {
  const features = ["Hair", "Makeover", "Beauty", "Nails", "Makeup", "Salons"];
  const [currentFeature, setCurrentFeature] = useState(0);
  const [displayFeature, setDisplayFeature] = useState(features[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFeature((prevFeature) => (prevFeature + 1) % features.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisplayFeature(features[currentFeature]);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [currentFeature]);

  const animatedCharacters = displayFeature.split("").map((char, index) => (
    <motion.span
      //   key={index}
      //   className="character"
      //   style={{ animationDelay: `${index * 100}ms` }}
      initial={{ translateY: 20 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {char}
    </motion.span>
  ));

  return (
    <>
      <section className="flex justify-between items-center w-full makeover">
        <div className="flex flex-col items-start">
          <div className="w-full flex grow justify-end items-center text-7xl">
            <div className="features-display mr-2 text-right">
              {animatedCharacters}
            </div>
            <span className="mr-6">?</span>
            <span className="features">Cara</span>
          </div>
          <div className="mt-8 text-2xl text-right w-full">
            All your beauty needs in one place.
          </div>
        </div>
        <div className="flex justify-center items-end">
          <Image
            src="/images/makeup.png"
            width={500}
            height={500}
            alt="model"
            className="rounded-2xl"
          />
        </div>
      </section>
    </>
  );
};

export default Makeover;
