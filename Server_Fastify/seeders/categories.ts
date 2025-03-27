import { Category } from "../src/modules/associations";
import { db } from "../MockData/db";

const seed = async () => {
  await Category.bulkCreate(db.categories);
  console.log("✅ Categories have been seeded!");
};

export default seed;
