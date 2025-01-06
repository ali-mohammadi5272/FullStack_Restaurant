import ItalianCuisine from "./ItalianCuisine";
import OurPopularMenu from "./OurPopularMenu";
import ReserveATable from "./ReserveATable";
import WelcomeToDelizioso from "./WelcomeToDelizioso";

const HomePage = (): React.ReactNode => {
  return (
    <main>
      <ItalianCuisine />
      <WelcomeToDelizioso />
      <OurPopularMenu />
      <ReserveATable />
    </main>
  );
};

export default HomePage;
