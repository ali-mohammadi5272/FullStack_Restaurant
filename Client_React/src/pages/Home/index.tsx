import ItalianCuisine from "./ItalianCuisine";
import WelcomeToDelizioso from "./WelcomeToDelizioso";

const HomePage = (): React.ReactNode => {
  return (
    <main>
      <ItalianCuisine />
      <WelcomeToDelizioso />
    </main>
  );
};

export default HomePage;
