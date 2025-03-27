import { Contact } from "../src/modules/associations";
import { db } from "../MockData/db";

const seed = async () => {
  await Contact.bulkCreate(db.contacts);
  console.log("✅ Contacts have been seeded!");
};

export default seed;
