import ItalianCuisine from "./ItalianCuisine";
import OurPopularMenu from "./OurPopularMenu";
import ReserveATable from "./ReserveATable";
import WelcomeToDelizioso from "./WelcomeToDelizioso";
import OurGreatestChef from "./OurGreatestChef.tsx";
import React from "react";

const HomePage = (): React.ReactNode => {
  return (
    <main>
      <ItalianCuisine />
      <WelcomeToDelizioso />
      <OurPopularMenu />
      <ReserveATable />
      <OurGreatestChef />
    </main>
  );
};

export default HomePage;
