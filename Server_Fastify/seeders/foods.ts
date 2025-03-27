import { Food } from "../src/modules/associations";
import { db } from "../MockData/db";

const seed = async () => {
  await Food.bulkCreate(db.foods);
  console.log("✅ Foods have been seeded!");
};

export default seed;
