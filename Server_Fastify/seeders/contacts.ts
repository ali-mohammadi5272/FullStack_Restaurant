import Contact from "../src/modules/ContactUs/model";
import { db } from "../MockData/db";

const seed = async () => {
  await Contact.bulkCreate(db.contacts);
  console.log("✅ Foods have been seeded!");
};

export default seed;
