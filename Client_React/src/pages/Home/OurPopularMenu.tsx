import MenuCards from "../../components/MenuCards/MenuCards";
import Categories from "../../components/Categories/Categories";

const OurPopularMenu = (): React.ReactNode => {
  return (
    <div className="mt-10 sm:mt-20">
      <h2 className="block font-bold text-5xl sm:text-6xl text-center">
        Our popular menu
      </h2>
      <Categories />
      <MenuCards />
    </div>
  );
};

export default OurPopularMenu;
