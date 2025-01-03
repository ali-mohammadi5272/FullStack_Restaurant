import ItalianCuisine from "./ItalianCuisine";
import OurPopularMenu from "./OurPopularMenu";
import WelcomeToDelizioso from "./WelcomeToDelizioso";

const HomePage = (): React.ReactNode => {
  return (
    <main>
      <ItalianCuisine />
      <WelcomeToDelizioso />
      <OurPopularMenu />
    </main>
  );
};

export default HomePage;
