import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Actions({ id, qtyAvail }) {
  return qtyAvail ? (
    <form>
      {/* TODO: Don't let number exceed `qtyAvail` */}
      <input type="number" defaultValue="1" className="p-1 w-12" />
      <button type="submit">🛒 Add to cart</button>

      <Link to={`/products/${id}`}>👁️ View Description</Link>
    </form>
  ) : (
    <p>Out of stock!</p>
  );
}

Actions.propTypes = {
  id: PropTypes.string.isRequired,
  qtyAvail: PropTypes.number,
};

export default Actions;
