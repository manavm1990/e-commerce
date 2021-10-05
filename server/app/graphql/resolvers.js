import AuthenticationError from "apollo-server-express";
import config from "../config.js";
import CategoryController from "../controllers/CategoryController.js";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";
import checkoutService from "../services/checkoutService.js";
import jwtService from "../services/tokenService.js";

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

    // Handled by the checkout service (no controller here)
    async checkout(
      _,
      // These are just the ids - not the actual products
      { products: productIds },
      { headers }
    ) {
      // Will be used for success/error redirection by Stripe API 💳
      const referrerUrl = headers?.referer
        ? new URL(headers.referer).origin
        : config.clientUrl;

      // Get the actual products from the ids
      const products = await Promise.all(
        productIds.map((productId) => ProductController.show(productId))
      );

      const checkoutSession = await checkoutService.generateCheckoutSession(
        products,
        referrerUrl
      );

      return { session: checkoutSession.id };
    },
  },
  Mutation: {
    async addUser(_, args) {
      const user = await UserController.create(args);
      const token = jwtService.generateToken({ user });

      return { user, token };
    },
  },
};
