import PropTypes from "prop-types";

export const Product = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  quantity: PropTypes.number,
  category: PropTypes.shape({ name: PropTypes.string.isRequired }),
});
