import React, { memo } from "react";
import { ChefCardPropsType } from "./chefCard.type";

const ChefCard: React.FC<ChefCardPropsType> = ({
  firstName,
  lastName,
  role,
  image,
}) => {
  return (
    <article className="text-center text-2xl space-y-4 sm:space-y-8">
      <img
        src={image}
        alt="Employee's Image"
        className="w-full h-auto rounded-[50px]"
      />
      <h3 className="text-sm sm:text-lg md:text-2xl font-semibold text-[#311F09]">
        {firstName} {lastName}
      </h3>
      <h4 className="text-sm sm:text-lg md:text-2xl text-[#A08D76]">{role}</h4>
    </article>
  );
};

export default memo(ChefCard);
