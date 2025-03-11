import { FoodTypes } from "../enum/foodTypes.enum";

export interface CreateOneDtoType {
  title: string;
  price: number;
  foodType: FoodTypes;
  description: string;
  categories: number[];
  image: string;
}
