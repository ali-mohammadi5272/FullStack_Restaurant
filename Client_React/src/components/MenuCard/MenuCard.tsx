import { Rate } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import { MenuCardPropsType } from "./menuCard.types";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";
import React from "react";

const MenuCard: React.FC<MenuCardPropsType> = ({
  title,
  description,
  src,
  price,
  rate,
}): React.ReactNode => {
  return (
    <article className="bg-gray-50 rounded-[70px] overflow-hidden">
      <section>
        <img
          className="w-full h-auto"
          src={`${import.meta.env.VITE_BASE_URL}${src}`}
          alt="Food's Image"
        />
      </section>
      <section className="px-7 pb-10 text-center">
        <header>
          <h1 className="text-3xl font-bold">{title}</h1>
        </header>
        <div className="my-5">
          <Rate disabled defaultValue={rate} className="text-primary" />
        </div>
        <p className="mb-8 leading-7">{description}</p>
        <footer className="flex items-center">
          <strong className="flex-grow w-1/2 text-2xl">${price}</strong>
          <CustomButton
            className="flex-grow w-1/2 font-bold bg-primary hidden sm:inline-block  cursor-pointer"
            title="Order bow"
          />
          <CustomButton
            className="sm:flex-grow w-[50px] sm:w-1/2 font-bold rounded-full bg-primary inline-block sm:hidden cursor-pointer"
            title={<FontAwesomeIcon icon="faPlus" />}
          />
        </footer>
      </section>
    </article>
  );
};

export default MenuCard;
