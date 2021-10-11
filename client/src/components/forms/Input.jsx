import camelCase from "lodash.camelcase";
import kebabCase from "lodash.kebabcase";
import PropTypes from "prop-types";
import React from "react";

function Input({ label, type }) {
  return (
    <div>
      <label htmlFor={kebabCase(label)} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={kebabCase(label)}
        name={name || camelCase(label)}
        placeholder={label}
        className="p-2 rounded"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = { type: "text" };

export default Input;
