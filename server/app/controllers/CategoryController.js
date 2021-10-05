import Category from "../models/Category.js";

export default {
  index() {
    return Category.find({});
  },
};
