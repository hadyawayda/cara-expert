"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-40 bg-transparent transition ${
          isScrolled ? "scrolled h-16" : "navbar h-24"
        }`}
      >
        <div className="flex justify-between left-navbar">
          <div className="flex justify-center w-40">
            <Link href={"/"}>
              <Image
                src={`${isScrolled ? "./caraLogo.svg" : "./caraLogo1.svg"}`}
                width={200}
                height={120}
                alt="Logo"
                className="text-white"
              />
            </Link>
          </div>
          <div className="flex justify-between w-96">
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/loyalty"}>Loyalty</Link>
            <Link href={"/about"}>About</Link>
          </div>
        </div>
        <div className="flex justify-between w-52">
          <div className="flex justify-between w-16">
            <Link href={"/"}>f</Link>
            <Link href={"/"}>I</Link>
            <Link href={"/"}>in</Link>
          </div>
          <div className="flex justify-between w-20">
            <button>S</button>
            <button>C</button>
            <button>L</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
