import { db } from "../MockData/db";
import { FoodCategory } from "../src/modules/associations";

const seed = async () => {
  await FoodCategory.bulkCreate(db.foodsCategories);
  console.log("✅ FoodCategory have been seeded!");
};

export default seed;
