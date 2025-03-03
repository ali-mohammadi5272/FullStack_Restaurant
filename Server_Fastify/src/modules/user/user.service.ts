import User from "./user.model";

const service = {
  async getAll() {
    return await User.findAll();
  },

  async getAllCount() {
    return User.count();
  },
};

export default service;
