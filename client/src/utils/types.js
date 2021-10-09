import PropTypes from "prop-types";

export const Product = PropTypes.exact({
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.exact({ name: PropTypes.string.isRequired }),
});
