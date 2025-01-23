import CustomButton from "../../components/CustomButton/CustomButton";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import foodImage from "./../../assets/images/Picture (3).png";

const WelcomeToDelizioso = (): React.ReactNode => {
  return (
    <div className="my-20 sm:my-40 bg-[#ecfaf1] py-24">
      <InnerContainer>
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-10">
          <section className="w-full md:w-1/2">
            <img className="w-full h-auto" src={foodImage} alt="Foo's Image" />
          </section>
          <section className="w-full md:w-1/2">
            <h2 className="font-bold text-5xl sm:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-primary">delizioso</span>
            </h2>
            <p className="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quibusdam voluptate alias est? Sunt eaque
              aspernatur molestias dolor itaque beatae suscipit consequuntur,
              autem repellat.
            </p>
            <div className="flex gap-3 sm:gap-6">
              <CustomButton
                title="See our menu"
                className="w-1/2 bg-primary py-7 font-semibold"
              />
            </div>
          </section>
        </div>
      </InnerContainer>
    </div>
  );
};

export default WelcomeToDelizioso;
