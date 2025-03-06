import Category from "./category.model";

const service = {
  async getOneByTitle(title: string) {
    return await Category.findOne({
      where: { title },
    });
  },
};

export default service;
