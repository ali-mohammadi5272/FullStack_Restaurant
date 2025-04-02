import { CategoryType } from "../../entities/category.entity";

export interface CategoriesPropsType {
  setSelectedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}
