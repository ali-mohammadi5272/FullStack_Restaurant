import { db } from "../MockData/db";
import FoodCategory from "../src/modules/FoodCategory/model";

const seed = async () => {
  await FoodCategory.bulkCreate(db.foodsCategories);
  console.log("✅ FoodCategory have been seeded!");
};

export default seed;
