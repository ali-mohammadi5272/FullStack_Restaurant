import Employee from "../src/modules/Employee/model";
import { db } from "../MockData/db";

const seed = async () => {
  await Employee.bulkCreate(db.employees);
  console.log("✅ Employees have been seeded!");
};

export default seed;
