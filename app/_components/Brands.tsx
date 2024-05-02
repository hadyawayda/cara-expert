import Image from "next/image";

type Category = {
  name: string;
  img: string;
};

const brands: Category[] = [
  { name: "Armani", img: "/Images/armani.jpg" },
  { name: "Chanel	", img: "/Images/chanel.jpg" },
  { name: "Dior", img: "/Images/dior.jpg" },
  { name: "Louis Vitton", img: "/Images/lv.png" },
  { name: "Versace", img: "/Images/versace.jpg" },
  { name: "Saint Laurent", img: "/Images/ysl.jpg" },
];

const Brands = () => {
  return (
    <div className="flex justify-between items-start gap-7">
      {brands.map((x) => (
        <Brand key={x.name} {...x} />
      ))}
    </div>
  );
};

export default Brands;

const Brand = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className="flex flex-col items-center justify-between h-36">
      <div className="w-24 h-full flex items-center">
        <Image
          src={img}
          width={100}
          height={100}
          alt={name}
          className="rounded-xl"
        />
      </div>
      <span className="black-text mt-4 flex justify-center">{name}</span>
    </div>
  );
};
