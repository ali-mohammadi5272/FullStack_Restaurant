import React from "react";
import MenuCards from "../../components/MenuCards/MenuCards.tsx";
import InnerContainer from "../../components/InnerContainer/InnerContainer.tsx";

const Menu = (): React.ReactNode => {
  return (
    <InnerContainer>
      <h2 className="block font-bold text-3xl sm:text-[45px] md:text-[60px] lg:text-[80px] text-center sm:mb-32">
        Menu
      </h2>
      <MenuCards />
    </InnerContainer>
  );
};

export default Menu;
