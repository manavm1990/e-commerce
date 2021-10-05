import stripe from "stripe";
import config from "../config.js";

const stripeCheckout = stripe(config.stripeSecretKey);

console.log(stripeCheckout);
