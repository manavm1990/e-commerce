import Product from "../models/Product.js";

export default {
  decrementInventory(id, quantity) {
    return Product.findByIdAndUpdate(id, {
      // Increment by a negative number - always.
      $inc: {
        quantity: Math.abs(quantity) * -1,
      },
    }).exec();
  },
  index(category, search) {
    const params = {};

    if (category) {
      params.category = category;
    }

    if (search) {
      params.search = search;
    }
    return Product.find(params).populate("category");
  },
  show(id) {
    // Mongoose doesn't require playing games with `_id` vs `id`. 🤓
    return Product.findById(id).populate("category");
  },
};
