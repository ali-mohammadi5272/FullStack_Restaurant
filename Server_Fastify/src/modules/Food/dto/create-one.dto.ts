import { FoodTypes } from "../enum/foodTypes.enum";

export interface CreateOneDto {
  title: string;
  price: number;
  foodType: FoodTypes;
  description: string;
  categories: number[];
  file: string;
}
