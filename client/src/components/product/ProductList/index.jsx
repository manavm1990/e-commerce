import { Product } from "@app/utils/types";
import PropTypes from "prop-types";
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Product).isRequired,
};

export default ProductList;
