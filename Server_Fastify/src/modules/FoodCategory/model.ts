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
    },

    category_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
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

export default FoodCategory;
