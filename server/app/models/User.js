import bcrypt from "bcrypt";
import { default as mongoose } from "mongoose";
import config from "../config.js";
import Order from "./Order.js";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  orders: [Order.schema],
});

// set up pre-save middleware to create password
userSchema.pre(
  "save",

  // ⚠️ Need to use arrow function to preserve 'this' context
  async function (next) {
    // ⚠️ Don't do this unnecessarily!
    if (this.isNew || this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, config.saltRounds);
    }

    next();
  }
);

userSchema.methods.validatePassword = (password) =>
  bcrypt.compare(password, this.password);

export default mongoose.model("User", userSchema);
