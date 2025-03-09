import Category from "../src/modules/category/category.model";
import { db } from "../MockData/db";
import { sequelize } from "../src/configs/db";

const seed = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(db.categories);
  console.log("Categories have been seeded!");
};

export default seed;
