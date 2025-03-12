import Contact from "../src/modules/ContactUs/model";
import { db } from "../MockData/db";

const seed = async () => {
  await Contact.bulkCreate(db.contacts);
  console.log("✅ Contacts have been seeded!");
};

export default seed;
