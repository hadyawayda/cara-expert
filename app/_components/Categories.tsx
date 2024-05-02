"use client";

import Image from "next/image";

type Category = {
  name: string;
  img: string;
};

let categories: Category[] = [
  { name: "Makeup", img: "/Images/makeup.jpg" },
  { name: "Fragrances", img: "/Images/fragrances.jpg" },
  { name: "Hair", img: "/Images/hair.jpg" },
  { name: "Skin Care", img: "/Images/skin-care.jpg" },
  { name: "Nails", img: "/Images/nails.jpg" },
];

const Categories = () => {
  return (
    <div className="flex justify-between items-center h-36 categories w-full">
      {categories.map((x) => (
        <Product key={x.name} {...x} />
      ))}
    </div>
  );
};

export default Categories;

const Product = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className="flex flex-col items-center justify-start h-36">
      <Image
        src={img}
        width={100}
        height={100}
        alt={name}
        className="rounded-xl"
      />
      <span className="black-text mt-4">{name}</span>
    </div>
  );
};
