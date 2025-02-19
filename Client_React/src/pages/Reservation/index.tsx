import InnerContainer from "../../components/InnerContainer/InnerContainer";
import tableImage from "./../../assets/images/Picture.png";
import BookATableForm from "../../components/BookATableForm/BookATableForm";
import React from "react";

const ReservationPage = (): React.ReactNode => {
  return (
    <div className="my-20 sm:my-40 py-24 md:py-12">
      <h2 className="font-bold text-3xl md:hidden text-center mb-16">
        Book a table
      </h2>
      <div className="flex items-center justify-between flex-col md:flex-row gap-10">
        <section className="w-full md:w-1/2">
          <img src={tableImage} alt="Food's Image" className="w-full h-auto" />
        </section>
        <section className="w-full md:w-1/2">
          <InnerContainer position="right">
            <h2 className="font-bold text-5xl sm:text-6xl hidden md:block">
              Book a table
            </h2>
            <BookATableForm />
          </InnerContainer>
        </section>
      </div>
    </div>
  );
};

export default ReservationPage;
