import mongoose from "mongoose";
import config from "../config.js";
import Category from "../models/Category.js";

mongoose
  .connect(config.db.url)
  .then(() => {
    console.log("Connected to the database");
    Category.deleteMany({});
  })
  .then(() =>
    Category.insertMany([
      { name: "Food" },
      { name: "Household Supplies" },
      { name: "Electronics" },
      { name: "Books" },
      { name: "Toys" },
    ])
  )
  .then(() => {
    console.log("Categories seeded");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
