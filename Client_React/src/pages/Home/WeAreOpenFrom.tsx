import CustomButton from "../../components/CustomButton/CustomButton";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import React from "react";

const WeAreOpenFrom = (): React.ReactNode => {
  return (
    <InnerContainer>
      <div className="my-20 sm:my-40 bg-[url('./../../assets/images/unsplash_gKN5m528N6o.png')] rounded-[80px] py-20">
        <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-10 text-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-bold text-5xl sm:text-6xl text-white">
              we are open from
            </h2>
            <h3 className="font-bold text-3xl sm:text-4xl text-white my-10">
              Monday-Sunday
            </h3>
            <div className="text-lg text-[#5C4529] mb-20 text-white space-y-1">
              <div className="flex justify-center gap-2">
                <p>Launch: Mon-Sun :</p>
                <p>11:00am-02:00pm</p>
              </div>
              <div className="flex justify-center gap-2">
                <p>Dinner: Sunday :</p>
                <div>
                  <p>04:00pm-08:00pm</p>
                  <p>04:00pm-09:00pm</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-6">
              <CustomButton
                title="Order now"
                className="w-1/2 bg-primary py-7 font-semibold"
              />
              <CustomButton
                title="Reservation"
                className="w-1/2 bg-[#FFFFFFF2] text-black py-7 font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </InnerContainer>
  );
};

export default WeAreOpenFrom;
