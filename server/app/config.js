import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    url: process.env.DB_CLIENT_URL || "mongodb://localhost/mernshopping",
  },
  clientUrl: "http://localhost:8080",
  port: process.env.PORT || 3000,
  saltRounds: 10,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
