import { Rate } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import { CardPropsType } from "./card.types";
import FontAwesomeIcon from "../FontAwesomeIcon/FontAwesomeIcon";

const Card: React.FC<CardPropsType> = ({
  title,
  description,
  src,
  price,
  rate,
}): React.ReactNode => {
  return (
    <article className="flex-grow bg-gray-50 rounded-[70px] overflow-hidden">
      <section>
        <img
          className="w-full h-auto rounded-full"
          src={src}
          alt="Food's Image"
        />
      </section>
      <section className="px-7 pb-10">
        <header>
          <h1 className="text-center text-3xl font-bold">{title}</h1>
        </header>
        <div className="text-center my-5">
          <Rate disabled defaultValue={rate} className="text-primary" />
        </div>
        <p className="mb-8">{description}</p>
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

export default Card;
