import React from "react";
import Categories from "../../components/Categories/Categories.tsx";
import MenuCards from "../../components/MenuCards/MenuCards.tsx";
import InnerContainer from "../../components/InnerContainer/InnerContainer.tsx";

const MenuPage = (): React.ReactNode => {
  return (
    <main className="my-20 sm:my-40">
      <InnerContainer>
        <h2 className="block font-bold text-3xl sm:text-[45px] md:text-[60px] lg:text-[80px] text-center sm:mb-32">
          Menu
        </h2>
        <Categories />
        <MenuCards />
      </InnerContainer>
    </main>
  );
};

export default MenuPage;
