import { memo } from "react";
import { CardType } from "./cards.types";
import Card from "../Card/Card";
import foodImage_1 from "./../../assets/images/Mask Group (1).png";
import foodImage_2 from "./../../assets/images/Mask Group (2).png";
import foodImage_3 from "./../../assets/images/Mask Group (5).png";
import foodImage_4 from "./../../assets/images/Mask Group (6).png";
import foodImage_5 from "./../../assets/images/Mask Group (7).png";
import foodImage_6 from "./../../assets/images/Mask Group.png";

const Cards = (): React.ReactNode => {
  const cards: CardType[] = [
    {
      id: 1,
      title: "Spaghetti",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: 12,
      src: foodImage_1,
    },
    {
      id: 2,
      title: "Gnocchi",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: 12,
      src: foodImage_2,
    },
    {
      id: 2,
      title: "Rovioli",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: 12,
      src: foodImage_3,
    },
    {
      id: 2,
      title: "Penne Alla Vodak",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: 12,
      src: foodImage_4,
    },
    {
      id: 2,
      title: "Risoto",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: 12,
      src: foodImage_5,
    },
    {
      id: 2,
      title: "Splitza Signature",
      rate: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: 12,
      src: foodImage_6,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-5 space-y-5">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default memo(Cards);
