import React, { memo } from "react";
import { CustomerCardPropsType } from "./customerCard.type.ts";

const CustomerCard: React.FC<CustomerCardPropsType> = ({
  img,
  name,
  role,
  className,
}) => {
  return (
    <div
      className={`text-center text-2xl space-y-4 sm:space-y-8 ${className ? className : ""}`}
    >
      <section>
        <img
          src={img}
          alt="Customer's Image"
          className="w-full h-auto rounded-full"
        />
      </section>
      <section>
        <h3 className="text-[16px] leading-3 sm:text-lg md:text-3xl font-semibold text-[#311F09]">
          {name}
        </h3>
        <h4 className="text-[12px] sm:text-sm md:text-xl text-[#5C4529]">
          {role}
        </h4>
      </section>
    </div>
  );
};

export default memo(CustomerCard);
