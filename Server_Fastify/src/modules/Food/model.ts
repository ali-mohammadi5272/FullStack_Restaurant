import { sequelize } from "../../configs/db";
import { FoodTypes } from "./enum/foodTypes.enum";
import {
  DataTypes,
  Model,
  InferCreationAttributes,
  InferAttributes,
  CreationOptional,
} from "sequelize";

class Food extends Model<InferAttributes<Food>, InferCreationAttributes<Food>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare price: number;
  declare foodType: FoodTypes;
  declare image: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Food.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },

    foodType: {
      type: DataTypes.ENUM(
        FoodTypes.PASTA,
        FoodTypes.PIZZA,
        FoodTypes.RICE,
        FoodTypes.SOUP
      ),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
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
  { tableName: "foods", timestamps: true, sequelize }
);

export default Food;
