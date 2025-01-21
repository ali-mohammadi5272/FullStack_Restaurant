import ChefCard from "../ChefCard/ChefCard.tsx";
import { ChefCardType } from "./chefCards.type.ts";
import chefImage_1 from "./../../assets/images/image 1.png";
import chefImage_2 from "./../../assets/images/image 3.png";
import chefImage_3 from "./../../assets/images/image 2.png";
import React from "react";

const ChefCards = (): React.ReactNode => {
  const chefCards: ChefCardType[] = [
    {
      id: 1,
      name: "Betran Komar",
      role: "Head chef",
      img: chefImage_1,
      imageClassName: "bg-[#C4C4C4]",
    },
    {
      id: 2,
      name: "Ferry Sauwi",
      role: "Chef",
      img: chefImage_2,
      imageClassName: "bg-[#ffe8cc]",
    },
    {
      id: 3,
      name: "Iswan Dracho",
      role: "Chef",
      img: chefImage_3,
      imageClassName: "bg-[#dce9e1]",
    },
    {
      id: 4,
      name: "Betran Komar",
      role: "Head chef",
      img: chefImage_1,
      imageClassName: "bg-[#ebe0d9]",
    },
  ];

  return (
    <div className="grid justify-center grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
      {chefCards.map((card) => (
        <ChefCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ChefCards;
