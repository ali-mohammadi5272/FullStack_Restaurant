import { EmployeeRoles } from "./enum/employeeRoles.enum";
import { sequelize } from "../../configs/db";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Genders } from "../User/enum/genders.enum";

class Employee extends Model<
  InferAttributes<Employee>,
  InferCreationAttributes<Employee>
> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare gender: Genders;
  declare role: EmployeeRoles;
  declare image: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.ENUM(Genders.FEMALE, Genders.MALE),
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM(
        EmployeeRoles.CHEF,
        EmployeeRoles.HEAD_CHEF,
        EmployeeRoles.MANAGER,
        EmployeeRoles.WAITER
      ),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },

    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    tableName: "employees",
    timestamps: true,
  }
);

export default Employee;
