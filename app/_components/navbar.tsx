"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = ({ isRoot }: { isRoot: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-40 transition ${
          isRoot ? "text-white" : !(isHover || isScrolled) ? "black-text" : null
        } ${isScrolled ? "scrolled h-16" : "navbar h-24"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between left-navbar">
          <div className="flex justify-center w-40">
            <Link href={"/"}>
              <Image
                src={`${
                  isRoot && !(isScrolled || isHover)
                    ? "./Icons/caraLogo1.svg"
                    : "./Icons/caraLogo.svg"
                }`}
                width={200}
                height={120}
                alt="Logo"
                className="text-white"
              />
            </Link>
          </div>
          <div className="flex justify-between menu-box text-base">
            <Link className="duration-75" href={"/explore"}>
              Explore
            </Link>
            <Link className="duration-75" href={"/services"}>
              Services
            </Link>
            <Link className="duration-75" href={"/products"}>
              Products
            </Link>
            <Link className="duration-75" href={"/loyalty"}>
              Loyalty
            </Link>
            <Link className="duration-75" href={"/about"}>
              About
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-60">
          <div className="flex justify-between logo-box">
            <Link
              className="w-20"
              href={"https://facebook.com/Caraexpert-106087448089403"}
              target="_blank"
            >
              <Image
                src={
                  isRoot || isHover || isScrolled
                    ? "./Icons/facebook.svg"
                    : "./Icons/facebook1.svg"
                }
                width={100}
                height={120}
                alt="facebook"
              />
            </Link>
            <Link
              className="w-24 mx-2"
              href={"https://instagram.com/cara.expert/"}
              target="_blank"
            >
              <Image
                src={
                  isRoot || isHover || isScrolled
                    ? "./Icons/instagram.svg"
                    : "./Icons/instagram1.svg"
                }
                width={100}
                height={140}
                alt="instagram"
              />
            </Link>
            <Link
              className="w-20"
              href={"https://linkedin.com/company/cara-expert/about/"}
              target="_blank"
            >
              <Image
                src={
                  isRoot || isHover || isScrolled
                    ? "./Icons/linkedin.svg"
                    : "./Icons/linkedin1.svg"
                }
                width={120}
                height={180}
                alt="linkedin"
              />
            </Link>
          </div>
          <div className="flex justify-between w-24">
            <button>
              <Image
                src={
                  isRoot || isHover || isScrolled
                    ? "./Icons/search.svg"
                    : "./Icons/search1.svg"
                }
                width={16}
                height={180}
                alt="search"
              />
            </button>
            <button>
              <Image
                src={
                  isRoot || isHover || isScrolled
                    ? "./Icons/bag.svg"
                    : "./Icons/bag1.svg"
                }
                width={18}
                height={180}
                alt="cart"
              />
            </button>
            <button>
              <Image
                src={
                  isRoot || isHover || isScrolled
                    ? "./Icons/user.svg"
                    : "./Icons/user1.svg"
                }
                width={16}
                height={180}
                alt="login"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
