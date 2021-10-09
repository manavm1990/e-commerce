import { Product } from "@app/utils/types";
import React from "react";

function ProductCard({
  product: { _id: id, name, price, description, image },
}) {
  return (
    <section id={id}>
      <figure>
        <img src={image} />
        <figcaption>{name}</figcaption>
      </figure>

      <p className="truncate">{description}</p>
      <p>{price}</p>
    </section>
  );
}

ProductCard.propTypes = {
  product: Product,
};

export default ProductCard;
