import { FoodTypes } from "../enum/foodTypes.enum";

export interface FoodType {
  id: number;
  title: string;
  price: number;
  foodType: FoodTypes;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
