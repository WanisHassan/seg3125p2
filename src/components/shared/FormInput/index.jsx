import React from "react";

import "./index.css";

const FormInput = ({ handleChange, label, error, ...otherInputProps }) => {
  return (
    <div className="input-group-container">
      <input
        className="form-input-container"
        onChange={handleChange}
        {...otherInputProps}
      />
      {label ? (
        <div
          className={`form-input-label ${
            otherInputProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </div>
      ) : null}
      {error ? <div className="error">{error.replace("_", " ")}</div> : null}
    </div>
  );
};

export default FormInput;
