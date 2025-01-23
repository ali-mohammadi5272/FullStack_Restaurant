import CustomButton from "../../components/CustomButton/CustomButton";
import ChefCards from "../../components/ChefCards/ChefCards.tsx";
import InnerContainer from "../../components/InnerContainer/InnerContainer.tsx";
import React from "react";

const OurGreatestChef = (): React.ReactNode => {
  return (
    <div className="my-20 sm:my-40">
      <InnerContainer>
        <h2 className="font-bold text-5xl sm:text-6xl text-center">
          Our greatest chef
        </h2>
        <ChefCards />
        <div className="text-center">
          <CustomButton title="View all" className="bg-primary w-[235px]" />
        </div>
      </InnerContainer>
    </div>
  );
};

export default OurGreatestChef;
