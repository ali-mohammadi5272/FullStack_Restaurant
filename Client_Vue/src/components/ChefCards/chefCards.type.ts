import type {ChefCardPropsType} from "../ChefCard/chefCard.type.ts";

interface ChefCardType extends ChefCardPropsType {
    id: number;
    imageClass?: string;
}

export type {ChefCardType};
