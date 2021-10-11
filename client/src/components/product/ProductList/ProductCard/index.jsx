import config from "@app/utils/config";
import { Product } from "@app/utils/types";
import React from "react";
import Actions from "./Actions";

function ProductCard({
  product: { _id: id, name, price, description, image, quantity },
}) {
  return (
    <section id={id} className="flex flex-col items-center">
      <figure>
        <img src={`${config.imgServerUrl}/${image}`} className="rounded-sm" />
        <figcaption className="text-center">{name}</figcaption>
      </figure>

      {/* TODO: Conditionally apply this class depending on if we are looking at card or details */}
      <p className="overflow-ellipsis">{description}</p>
      <p>{price}</p>
      <Actions id={id} qtyAvail={quantity} />
    </section>
  );
}

ProductCard.propTypes = {
  product: Product,
};

export default ProductCard;
