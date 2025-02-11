import React from "react";
import InnerContainer from "../../components/InnerContainer/InnerContainer.tsx";
import foodImage_2 from "../../assets/images/Picture_2.png";
import foodImage_1 from "../../assets/images/Picture_1.png";

const OurRestaurant = (): React.ReactNode => {
  return (
    <div className="my-10 sm:my-20 py-12 md:py-6">
      <InnerContainer>
        <h2 className="font-bold text-5xl sm:text-6xl md:hidden text-center mb-16">
          <span className="text-primary">Our </span>
          <span>Restaurant</span>
        </h2>
        <div className="flex justify-between items-center flex-col-reverse md:flex-row-reverse gap-10">
          <section className="w-full md:w-1/2">
            <h2 className="font-bold text-5xl sm:text-6xl hidden md:block">
              <span className="block text-primary">Our</span>
              <span className="block">Restaurant</span>
            </h2>
            <p className="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
          </section>
          <section className="w-full md:w-1/2">
            <img
              src={foodImage_2}
              alt="Food's Image"
              className="w-full h-auto"
            />
          </section>
        </div>
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-10">
          <section className="w-full md:w-1/2">
            <p className="text-lg text-[#5C4529] mt-10 mb-20 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
          </section>
          <section className="w-full md:w-1/2">
            <img
              src={foodImage_1}
              alt="Food's Image"
              className="w-full h-auto"
            />
          </section>
        </div>
      </InnerContainer>
    </div>
  );
};

export default OurRestaurant;
