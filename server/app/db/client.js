import mongoose from "mongoose";
import config from "../config.js";

export default {
  connect() {
    return mongoose.connect(config.db.url);
  },
  close() {
    mongoose.connection.close().then(() => {
      console.info("Mongoose connection disconnected");
      process.exit(0);
    });
  },
};
