import React from "react";
import OurRestaurant from "./OurRestaurant.tsx";
import OwnerAndExecutiveChef from "./OwnerAndExecutiveChef.tsx";

const AboutUsPage = (): React.ReactNode => {
  return (
    <main>
      <OurRestaurant />
      <OwnerAndExecutiveChef />
    </main>
  );
};

export default AboutUsPage;
