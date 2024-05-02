import Brands from "@/app/_components/Brands";
import Categories from "@/app/_components/Categories";
import Discover from "@/app/_components/Discover";

const Explore = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-max h-full mx-36 px-4 mt-36">
      <div className="cara-logo"></div>
      <Categories />
      <Discover />
      <Brands />
      <div>Trending Looks</div>
    </div>
  );
};

export default Explore;
