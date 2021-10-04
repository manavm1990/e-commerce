import { default as mongoose } from "mongoose";

const { Schema } = mongoose;

export default mongoose.model(
  "Order",
  new Schema({
    purchaseDate: {
      type: Date,
      default: Date.now,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  })
);
