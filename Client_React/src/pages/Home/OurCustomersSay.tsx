import React from "react";
import CustomerCard from "../../components/CustomerCard/CustomerCard.tsx";
import customerImage from "./../../assets/images/Ellipse 16.png";
import customersImage from "./../../assets/images/User.png";

const OurCustomersSay = (): React.ReactNode => {
  return (
    <div className="bg-[#fbfafa] sm:py-16 mt-10 sm:mt-20">
      <div className="bg-no-repeat bg-right-top sm:bg-left-top bg-[url('./../../assets/images/Ball.png')] sm:bg-[url('./../../assets/images/Round.png')] text-center flex flex-col justify-between items-center">
        <h2 className="font-bold text-4xl sm:text-6xl my-24">
          Our Customers say
        </h2>
        <CustomerCard
          name="Starla Virgoun"
          role="Financial advisor"
          img={customerImage}
          className="w-[120px] sm:w-[262px]"
        />
        <q className="text-[12px] sm:text-lg w-1/2 my-4 sm:my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </q>
        <img
          src={customersImage}
          alt="Customers'es Image"
          className="w-3/5 sm:w-2/3"
        />
      </div>
    </div>
  );
};

export default OurCustomersSay;
