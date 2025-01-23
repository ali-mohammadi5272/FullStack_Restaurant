import MenuCards from "../../components/MenuCards/MenuCards";
import Categories from "../../components/Categories/Categories";
import InnerContainer from "../../components/InnerContainer/InnerContainer";

const OurPopularMenu = (): React.ReactNode => {
  return (
    <div className="my-20 sm:my-40">
      <InnerContainer>
        <h2 className="block font-bold text-5xl sm:text-6xl text-center">
          Our popular menu
        </h2>
        <Categories />
        <MenuCards />
      </InnerContainer>
    </div>
  );
};

export default OurPopularMenu;
