import { CategoryType } from "../../entities/category.entity";

export interface CategoriesPropsType {
  onChangeCategory: (category: CategoryType) => void;
}
