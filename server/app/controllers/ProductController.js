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
    return Product.find({
      category,
      name: {
        // TODO{manav.misra}: Make this search case insensitive
        $regex: search,
      },
    }).populate("category");
  },
  show(id) {
    // Mongoose doesn't require playing games with `_id` vs `id`. 🤓
    return Product.findById(id).populate("category");
  },
};
