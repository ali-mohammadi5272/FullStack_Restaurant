import usersSeed from "./users";
import categoriesSeed from "./category";

const seeds: (() => Promise<void>)[] = [usersSeed, categoriesSeed];

const seedAll = async () => {
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
