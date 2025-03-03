import { sequelize } from "../../configs/db";
import { Roles } from "./enum/roles.enum";
import { hashPassword } from "../../utils/helperFuncs/helperFuncs";
import {
  DataTypes,
  Model,
  InferCreationAttributes,
  InferAttributes,
} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: number;
  declare userName: string;
  declare email: string;
  declare role: Roles;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    role: {
      type: DataTypes.ENUM(Roles.ADMIN, Roles.USER),
      allowNull: false,
      defaultValue: Roles.USER,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "users", timestamps: true, sequelize }
);

User.beforeCreate(async (user) => {
  const hashedPassword: string = await hashPassword(user.password);
  user.setDataValue("password", hashedPassword);
});

export default User;
