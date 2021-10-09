import { Product } from "@app/utils/types";
import PropTypes from "prop-types";
import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Product).isRequired,
};

export default ProductList;
