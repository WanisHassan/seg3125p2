import React from "react";

import "./index.css";

const Button = ({ children, ...rest }) => {
  const { isInverted, styles, isPaypal } = rest;
  return (
    <button
      className={`${isInverted ? "inverted-button" : "button"} ${
        styles ? styles : ""
      } ${isPaypal ? "paypal" : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
