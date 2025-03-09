import { UserType } from "../src/modules/user/entity/user.entity";
import { Roles } from "../src/modules/user/enum/roles.enum";

interface DatabaseType {
  users: UserType[];
}

export const db: DatabaseType = {
  users: [
    {
      id: 1,
      fullName: "ali mohammadi",
      userName: "ali_mohammadi",
      email: "ali_mohammadi@gmail.com",
      role: Roles.ADMIN,
      password: "ali_mohammadi_123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      fullName: "john wick",
      userName: "john_wick",
      email: "john_wick@gmail.com",
      role: Roles.USER,
      password: "john_wick_123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      fullName: "tony stark",
      userName: "tony_stark",
      email: "tony_stark@gmail.com",
      role: Roles.USER,
      password: "tony_stark_123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      fullName: "mary jane",
      userName: "mary_jane",
      email: "mary_jane@gmail.com",
      role: Roles.USER,
      password: "mary_jane_123",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
