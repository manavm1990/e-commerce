import AuthenticationError from "apollo-server-express";
import CategoryController from "../controllers/CategoryController.js";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";

export default {
  Query: {
    categories() {
      return CategoryController.index().exec();
    },
    products(_, { category, name }) {
      return ProductController.index(category, name).exec();
    },
    product(_, { _id }) {
      return ProductController.show(_id).exec();
    },
    async user(_, __, { user }) {
      if (!user) throw new AuthenticationError("Not authenticated");

      return UserController.show(user.id).exec();
    },
    order(_, { _id }, { user }) {
      if (!user) throw new AuthenticationError("Not authenticated");

      return UserController.showOrder(user.id, _id).exec();
    },
    checkout(_, { _id }, { user }) {},
  },
};
