import { Product } from "@app/utils/types";
import PropTypes from "prop-types";
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <section className="my-2 p-4">
      <h2 className="font-bold mb-2 text-lg text-center">Products</h2>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Product).isRequired,
};

export default ProductList;
