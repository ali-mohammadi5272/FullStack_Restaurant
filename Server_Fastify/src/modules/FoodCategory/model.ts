import Food from "../Food/model";
import Category from "../Category/model";
import { sequelize } from "../../configs/db";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

class FoodCategory extends Model<
  InferAttributes<FoodCategory>,
  InferCreationAttributes<FoodCategory>
> {
  declare id: CreationOptional<number>;
  declare food_id: number;
  declare category_id: number;
}

FoodCategory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },

    food_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Food,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },

    category_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "foods_categories",
    indexes: [
      {
        fields: ["food_id", "category_id"],
        unique: true,
      },
    ],
  }
);

Category.belongsToMany(Food, {
  through: FoodCategory,
  foreignKey: "category_id",
});
Food.belongsToMany(Category, { through: FoodCategory, foreignKey: "food_id" });

export default FoodCategory;
