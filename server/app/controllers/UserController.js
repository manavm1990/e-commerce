import User from "../models/User.js";
import AuthenticationError from "apollo-server-express";

export default {
  create(payload) {
    return User.create(payload);
  },
  createOrder(id, order) {
    return User.findByIdAndUpdate(id, { $push: { orders: order } });
  },
  async login(email, password) {
    const existingUser = await User.findOne({ email });
    if (!existingUser) throw new AuthenticationError("Access denied 🔒 🙅🏾‍♂️.");
    const isValid = await existingUser.validatePassword(password);
    if (!isValid) throw new AuthenticationError("Access denied 🔒 🙅🏾‍♂️.");
    return existingUser;
  },
  async show(id) {
    const foundUser = User.findById(id).populate({
      path: "orders.products",
      populate: "category",
    });

    foundUser.sort((a, b) => b.purchaseDate - a.purchaseDate);

    return foundUser;
  },
  async showOrder(userId, orderId) {
    const foundUser = await this.show(userId);

    return foundUser.order.id(orderId);
  },
  update(id, payload) {
    return User.findByIdAndUpdate(id, payload, { new: true }).exec();
  },
};
