import camelCase from "lodash.camelcase";
import kebabCase from "lodash.kebabcase";
import startCase from "lodash.startcase";
import PropTypes from "prop-types";
import React from "react";

function Input({ id, label, name, type }) {
  const inputId = id || kebabCase(name);

  return (
    <div>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        name={name || camelCase(label)}
        placeholder={startCase(label)}
        className="p-2 rounded"
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = { type: "text" };

export default Input;
