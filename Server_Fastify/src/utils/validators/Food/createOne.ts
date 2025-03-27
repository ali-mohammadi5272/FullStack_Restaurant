import { array, mixed, number, object, string } from "yup";
import { FoodTypes } from "../../../modules/Food/enum/foodTypes.enum";

const createFoodSchema = object().shape({
  title: string().min(2).required(),
  price: number().min(0).required(),
  description: string().min(2).required(),
  categories: array().of(number().required()).min(1).required(),
  foodType: mixed<FoodTypes>()
    .oneOf([FoodTypes.PASTA, FoodTypes.PIZZA, FoodTypes.RICE, FoodTypes.SOUP])
    .required(),
});

export default createFoodSchema;
