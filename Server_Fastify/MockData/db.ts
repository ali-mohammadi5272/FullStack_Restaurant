import { CategoryType } from "../src/modules/Category/entity/category.entity";
import { ContactUsType } from "../src/modules/ContactUs/entity/contact-us.entity";
import { AnsweredTypes } from "../src/modules/ContactUs/enum/answered.enum";
import { EmployeeType } from "../src/modules/Employee/entity/employee.entity";
import { EmployeeRoles } from "../src/modules/Employee/enum/employeeRoles.enum";
import { FoodType } from "../src/modules/Food/entity/food.entity";
import { FoodTypes } from "../src/modules/Food/enum/foodTypes.enum";
import { FoodCategoryType } from "../src/modules/FoodCategory/entity/foodCategory.entity";
import { UserType } from "../src/modules/User/entity/user.entity";
import { Genders } from "../src/modules/User/enum/genders.enum";
import { Roles } from "../src/modules/User/enum/roles.enum";

interface DatabaseType {
  users: UserType[];
  categories: CategoryType[];
  foods: FoodType[];
  foodsCategories: FoodCategoryType[];
  contacts: ContactUsType[];
  employees: EmployeeType[];
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
  categories: [
    {
      id: 1,
      title: "Dinner",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Lunch",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Dessert",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: "Drink",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  foods: [
    {
      id: 1,
      title: "Veggie Garden",
      price: 150,
      foodType: FoodTypes.PASTA,
      image: "default.png",
      description: "This is a description",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Penne Alla Vodak",
      price: 100,
      foodType: FoodTypes.PASTA,
      image: "default.png",
      description: "This is a description",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  foodsCategories: [
    {
      id: 1,
      food_id: 1,
      category_id: 1,
    },
    {
      id: 2,
      food_id: 1,
      category_id: 2,
    },
    {
      id: 3,
      food_id: 2,
      category_id: 1,
    },
    {
      id: 4,
      food_id: 2,
      category_id: 2,
    },
  ],
  contacts: [
    {
      id: 1,
      firstName: "John",
      lastName: "Wick",
      email: "john.wick@gmail.com",
      subject: "Lorem ipsum",
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      answered: AnsweredTypes.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: "Tony",
      lastName: "Stark",
      email: "tony.stark@gmail.com",
      subject: "Lorem ipsum",
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      answered: AnsweredTypes.ANSWERED,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: "Peter",
      lastName: "Parker",
      email: "peter.parker@gmail.com",
      subject: "Lorem ipsum",
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      answered: AnsweredTypes.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      firstName: "Anakin",
      lastName: "Skywalker",
      email: "darth.vader@gmail.com",
      subject: "Lorem ipsum",
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      answered: AnsweredTypes.PENDING,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  employees: [
    {
      id: 1,
      firstName: "Ismail",
      lastName: "Marzuki",
      gender: Genders.MALE,
      role: EmployeeRoles.MANAGER,
      image: "defaultPhoto.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: "Betran",
      lastName: "Komar",
      gender: Genders.MALE,
      role: EmployeeRoles.HEAD_CHEF,
      image: "defaultPhoto.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: "Ferry",
      lastName: "Sauwi",
      gender: Genders.MALE,
      role: EmployeeRoles.CHEF,
      image: "defaultPhoto.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      firstName: "Iswan",
      lastName: "Dracho",
      gender: Genders.MALE,
      role: EmployeeRoles.CHEF,
      image: "defaultPhoto.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
