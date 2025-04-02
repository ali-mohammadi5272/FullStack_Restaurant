import { FoodType } from "../../entities/food.entity";
import { GetAllResponse } from "../../types/pagination.type";

export interface GetAllFoodsResponse extends GetAllResponse {
  foods: FoodType[];
}
