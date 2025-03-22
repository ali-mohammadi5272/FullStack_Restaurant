import React, { memo, useEffect, useState } from "react";
import Card from "../MenuCard/MenuCard";
import PaginationComponent from "../Pagination/Pagination";
import { FoodType } from "../../entities/food.entity";
import { request } from "../../services/axios/axios";

const MenuCards = (): React.ReactNode => {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const getFoods = async (): Promise<void> => {
    const response = await request.GET<FoodType[]>({
      url: "/foods",
      cache: {
        key: "foods-component-unique-key",
      },
    });

    setFoods(response.data.data);
  };

  useEffect(() => {
    getFoods();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {foods.map((card) => (
          <Card key={card.id} src={card.image} rate={5} {...card} />
        ))}
      </div>
      <div className="mt-20">
        <PaginationComponent onChange={() => {}} />
      </div>
    </div>
  );
};

export default memo(MenuCards);
