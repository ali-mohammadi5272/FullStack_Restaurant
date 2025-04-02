import React, { memo, useEffect, useMemo, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { request } from "../../services/axios/axios";
import { CategoryType } from "../../entities/category.entity";

const Categories = (): React.ReactNode => {
  const [categories, setCategories] = useState<CategoryType[]>([
    {
      id: 0.12345,
      title: "All Categories",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  const [activeCategoryId, setActiveCategoryId] = useState<number>(
    categories[0].id
  );

  const memoCategories: JSX.Element[] = useMemo(() => {
    return categories.map((category) => (
      <CustomButton
        key={category.id}
        title={category.title}
        onClick={() => categoryClickHandler(category)}
        className={`
          flex-grow py-7 px-10 md:px-0
          ${
            category.id === activeCategoryId
              ? "bg-[#311F09] text-[#FFFFFF]"
              : "bg-gray-50 text-[#311F09]"
          }
        `}
      />
    ));
  }, [categories, activeCategoryId]);

  const getCategories = async (): Promise<void> => {
    const response = await request.GET<CategoryType[]>({
      url: "/categories",
      cache: {
        key: "categories-component-unique-key",
      },
    });

    setCategories([
      {
        id: 0.12345,
        title: "All",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ...response.data.data,
    ]);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const changeActiveCategory = (categoryId: number): void => {
    setActiveCategoryId(categoryId);
  };

  const categoryClickHandler = (category: CategoryType): void => {
    changeActiveCategory(category.id);
  };

  return (
    <div className="flex justify-between gap-5 md:gap-10 my-20 overflow-x-auto">
      {memoCategories}
    </div>
  );
};

export default memo(Categories);
