import User from "../user/user.model";
import { sequelize } from "../../configs/db";
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

class RefreshToken extends Model<
  InferAttributes<RefreshToken>,
  InferCreationAttributes<RefreshToken>
> {
  declare id: number;
  declare token: string;
  declare user_id: number;
}

RefreshToken.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "refreshTokens",
    timestamps: true,
    sequelize,
  }
);

export default RefreshToken;
