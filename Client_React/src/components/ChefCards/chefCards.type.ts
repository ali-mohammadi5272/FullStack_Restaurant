import { ChefCardPropsType } from "../ChefCard/chefCard.type.ts";

interface ChefCardType extends ChefCardPropsType {
  id: number;
  imageClassName?: string;
}

export type { ChefCardType };
