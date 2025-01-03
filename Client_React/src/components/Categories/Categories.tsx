import { useState } from "react";
import { CategoryType } from "./categories.types";
import CustomButton from "../CustomButton/CustomButton";

const Categories = (): React.ReactNode => {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  const categories: CategoryType[] = [
    { id: 1, title: "All catagory" },
    { id: 2, title: "Dinner" },
    { id: 3, title: "Lunch" },
    { id: 4, title: "Dessert" },
    { id: 5, title: "Drink" },
  ];

  const changeActiveCategory = (categoryId: number): void => {
    setActiveCategoryId(categoryId);
  };

  const categoryHandler = (category: CategoryType): void => {
    changeActiveCategory(category.id);
  };

  return (
    <div className="flex justify-between gap-5 md:gap-10 my-20 overflow-x-auto">
      {categories.map((category) => (
        <CustomButton
          key={category.id}
          title={category.title}
          onClick={() => categoryHandler(category)}
          className={`
            flex-grow py-7 px-10 md:px-0
            ${
              category.id === activeCategoryId
                ? "bg-[#311F09] text-[#FFFFFF]"
                : "bg-gray-50 text-[#311F09]"
            }
          `}
        />
      ))}
    </div>
  );
};

export default Categories;
