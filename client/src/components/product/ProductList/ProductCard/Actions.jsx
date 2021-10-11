import PropTypes from "prop-types";
import React from "react";

function Actions({ qtyAvail }) {
  return qtyAvail ? (
    <form className="py-3">
      {/* TODO: Don't let number exceed `qtyAvail` */}
      <input type="number" defaultValue="1" className="p-1 w-12 mr-2" />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-2 rounded-sm w-max"
      >
        🛒 Add to Cart
      </button>
    </form>
  ) : (
    <p>Out of stock!</p>
  );
}

Actions.propTypes = {
  qtyAvail: PropTypes.number,
};

export default Actions;
