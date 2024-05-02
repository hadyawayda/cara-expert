import Image from "next/image";

const Discover = () => {
  return (
    <div className="m-14 flex flex-col justify-between">
      <Image
        src="/Images/shop.jpg"
        width={400}
        height={400}
        alt="shop"
        className="rounded-2xl"
      />
      <div className="black-text flex justify-center mt-4 text-2xl">
        Discover Salon
      </div>
    </div>
  );
};

export default Discover;
