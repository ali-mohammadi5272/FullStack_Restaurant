import React, { memo, useEffect, useState } from "react";
import Card from "../MenuCard/MenuCard";
import PaginationComponent from "../Pagination/Pagination";
import { FoodType } from "../../entities/food.entity";
import { request } from "../../services/axios/axios";
import { GetAllFoodsResponse } from "./menuCards.types";

const MenuCards = (): React.ReactNode => {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [allFoodsCount, setAllFoodsCount] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(4);
  const [page, setPage] = useState<number>(1);

  const getFoods = async (): Promise<void> => {
    const response = await request.GET<GetAllFoodsResponse>({
      url: "/foods",
      cache: {
        key: `foods-component-page${page}-limit${pageSize}-unique-key`,
      },
      configs: {
        params: {
          limit: pageSize,
          page,
        },
      },
    });

    setFoods(response.data.data.foods);
    setAllFoodsCount(response.data.data.count);
  };

  const paginationOnChange = (newPage: number, size: number) => {
    setPageSize(size);
    setPage(newPage);
  };

  useEffect(() => {
    getFoods();
  }, [page, pageSize]);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {foods.map((card) => (
          <Card key={card.id} src={card.image} rate={5} {...card} />
        ))}
      </div>
      <div className="mt-20">
        <PaginationComponent
          onChange={paginationOnChange}
          total={allFoodsCount}
          defaultPageSize={pageSize}
          defaultCurrent={page}
          pageSizeOptions={[4, 8, 12, 16, 20]}
          disabled={!allFoodsCount}
        />
      </div>
    </div>
  );
};

export default memo(MenuCards);
