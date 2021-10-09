import { Product } from "@app/utils/types";
import React from "react";
import Actions from "./Actions";

function ProductCard({
  product: { _id: id, name, price, description, image, quantity },
}) {
  return (
    <section id={id}>
      <figure>
        <img src={image} />
        <figcaption>{name}</figcaption>
      </figure>

      {/* TODO: Conditionally apply this class depending on if we are looking at card or details */}
      <p className="truncate">{description}</p>
      <p>{price}</p>
      <Actions id={id} qtyAvail={quantity} />
    </section>
  );
}

ProductCard.propTypes = {
  product: Product,
};

export default ProductCard;
