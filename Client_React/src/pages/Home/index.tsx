import React from "react";
import ItalianCuisine from "./ItalianCuisine";
import OurPopularMenu from "./OurPopularMenu";
import ReserveATable from "./ReserveATable";
import WelcomeToDelizioso from "./WelcomeToDelizioso";
import OurGreatestChef from "./OurGreatestChef.tsx";
import OurCustomersSay from "./OurCustomersSay.tsx";
import WeAreOpenFrom from "./WeAreOpenFrom.tsx";

const HomePage = (): React.ReactNode => {
  return (
    <main>
      <ItalianCuisine />
      <WelcomeToDelizioso />
      <OurPopularMenu />
      <ReserveATable />
      <OurGreatestChef />
      <OurCustomersSay />
      <WeAreOpenFrom />
    </main>
  );
};

export default HomePage;
