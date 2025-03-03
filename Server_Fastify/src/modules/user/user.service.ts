import User from "./user.model";

const service = {
  async getAll() {
    return await User.findAll();
  },
};

export default service;
