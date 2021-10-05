import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    url: process.env.DB_CLIENT_URL || "mongodb://localhost/mernshopping",
  },
  clientUrl: "http://localhost:8080",
  jwt: {
    expirationTime: process.env.JWT_EXPIRATION || "1d",
    secret: process.env.JWT_SECRET,
  },
  port: process.env.PORT || 3000,
  saltRounds: 10,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
