import User from "./User/model";
import RefreshToken from "./RefreshToken/model";
import Food from "./Food/model";
import Category from "./Category/model";
import FoodCategory from "./FoodCategory/model";

User.hasMany(RefreshToken, {
  foreignKey: "user_id",
});

RefreshToken.belongsTo(User, { foreignKey: "user_id" });

Category.belongsToMany(Food, {
  through: FoodCategory,
  foreignKey: "category_id",
  otherKey: "food_id",
  as: "foods",
});

Food.belongsToMany(Category, {
  through: FoodCategory,
  foreignKey: "food_id",
  otherKey: "category_id",
  as: "categories",
});

export { User, RefreshToken, Food, Category, FoodCategory };
