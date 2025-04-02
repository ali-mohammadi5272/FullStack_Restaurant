import { sequelize } from "../../configs/db";
import { Food } from "../associations";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

class Category extends Model<
  InferAttributes<Category>,
  InferCreationAttributes<Category>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare getFoods: () => Promise<Food[]>;
  declare addFood: (food: Food) => Promise<Food>;
  declare addFoods: (foods: Food[]) => Promise<Food[]>;
  declare removeFood: (foods: Food) => Promise<void>;
  declare removeFoods: (foods: Food[]) => Promise<void>;
}

Category.init(
  {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "categories",
    timestamps: true,
    sequelize,
  }
);

export default Category;
