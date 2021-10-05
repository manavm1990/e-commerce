import User from "../models/User.js";

export default {
  create(payload) {
    return User.create(payload);
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
};
