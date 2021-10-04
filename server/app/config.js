import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  db: {
    url: process.env.DB_CLIENT_URL || "mongodb://localhost/mernshopping",
  },
  saltRounds: 10,
};
