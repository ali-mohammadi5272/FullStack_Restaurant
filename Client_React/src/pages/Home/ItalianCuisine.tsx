import CustomButton from "../../components/CustomButton/CustomButton";
import foodImage from "./../../assets/images/Illustration.png";

const ItalianCuisine = (): React.ReactNode => {
  return (
    <div className="flex justify-between items-center mt-10 sm:mt-20 flex-col md:flex-row gap-10">
      <section className="w-full md:w-1/2">
        <h1 className="font-bold text-5xl sm:text-6xl">
          <span className="block">Italian</span>
          <span className="block">Cuisine</span>
        </h1>
        <p className="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quibusdam voluptate alias est? Sunt eaque aspernatur
          molestias dolor itaque beatae suscipit consequuntur, autem repellat.
        </p>
        <div className="flex gap-3 sm:gap-6">
          <CustomButton
            title="Order now"
            className="w-1/2 bg-primary py-7 font-semibold"
          />
          <CustomButton
            title="Reservation"
            className="w-1/2 bg-secondary py-7 font-semibold"
          />
        </div>
      </section>
      <section className="w-full md:w-1/2">
        <img className="w-full h-auto" src={foodImage} alt="Foo's Image" />
      </section>
    </div>
  );
};

export default ItalianCuisine;
