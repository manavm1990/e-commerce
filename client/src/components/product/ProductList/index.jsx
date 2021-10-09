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
  products: PropTypes.arrayOf(
    PropTypes.exact({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      category: PropTypes.exact({ name: PropTypes.string.isRequired }),
    })
  ).isRequired,
};

export default ProductList;
