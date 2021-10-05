import stripe from "stripe";
import config from "../config.js";

const stripeCheckout = stripe(config.stripeSecretKey);

export default {
  async generateCheckoutSession(products, referrerUrl) {
    const stripeProducts = await Promise.all(
      products.map(({ name, description, image, price }) =>
        stripeCheckout.products.create({
          name,
          description,

          // Only one image 🖼️ per product is provided in data 🗃️.
          images: [`http://localhost:4000/images/${image}`],

          // Need this later for creating stripePrices
          metadata: { price },
        })
      )
    );

    const stripePrices = await Promise.all(
      stripeProducts.map((stripeProduct) =>
        stripeCheckout.prices.create({
          product: stripeProduct.id,

          // The price is in cents, so the value of the price parameter (unit_price) must be a multiple of 100.
          // https://stripe.com/docs/api/prices/create
          unit_amount: stripeProduct.metadata.price * 100,
          currency: "usd",
        })
      )
    );

    const stripeLineItems = stripePrices.map((stripePrice) => ({
      price: stripePrice.id,

      // Only allowing quantity of 1 🍕 per product.
      quantity: 1,
    }));

    const stripeSession = await stripeCheckout.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeLineItems,
      mode: "payment",

      // `CHECKOUT_SESSION_ID` is magically supplied by Stripe.
      success_url: `${referrerUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: referrerUrl,
    });

    return stripeSession;
  },
};
