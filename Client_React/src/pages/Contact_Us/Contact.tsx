import React from "react";
import InnerContainer from "../../components/InnerContainer/InnerContainer";
import ContactUsFrom from "../../components/ContactUsFrom/ContactUsFrom";
import Map from "../../components/ContactUsMap/ContactUsMap";

const Contact = (): React.ReactNode => {
  return (
    <div className="mt-20 sm:mt-40 pt-24 md:pt-12 space-y-28">
      <InnerContainer>
        <h2 className="font-bold text-5xl sm:text-6xl text-center">
          Contact us
        </h2>
        <p className="text-lg text-[#5C4529] mt-10 mb-20 text-center">
          We love hearing from our customers. Feel free to share your experience
          or ask any questions you may have.
        </p>
        <ContactUsFrom />
      </InnerContainer>
      <Map />
    </div>
  );
};

export default Contact;
