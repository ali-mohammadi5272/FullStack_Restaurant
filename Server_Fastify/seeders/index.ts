import usersSeed from "./users";
import categoriesSeed from "./categories";
import foodsSeed from "./foods";
import contactsSeed from "./contacts";
import foodsCategoriesSeed from "./foodsCategories";
import { sequelize } from "../src/configs/db";

const seeds: (() => Promise<void>)[] = [
  usersSeed,
  categoriesSeed,
  foodsSeed,
  foodsCategoriesSeed,
  contactsSeed,
];

const seedAll = async () => {
  await sequelize.sync({ force: true });

  try {
    for (const seed of seeds) {
      await seed();
    }
  } catch (err) {
    console.log("Seeder Error: ", err);
  } finally {
    process.exit(1);
  }
};

seedAll();
