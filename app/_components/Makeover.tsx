import Image from "next/image";
import TextAnimation from "./TextAnimation";

const Makeover = () => {
  return (
    <>
      <section className="flex justify-between items-center w-full makeover">
        <div className="flex flex-col items-start">
          <div className="w-full flex grow justify-end items-center text-7xl">
            <div className="features-display flex justify-end w-full">
              <TextAnimation />
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
            src="/Images/makeup.png"
            width={500}
            height={500}
            alt="model"
            className="rounded-2xl mt-16"
          />
        </div>
      </section>
    </>
  );
};

export default Makeover;
