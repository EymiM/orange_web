/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Drink = ({ className, drink = "/img/drink-5.png" }) => {
  return <img className={`drink ${className}`} alt="Drink" src={drink} />;
};

Drink.propTypes = {
  drink: PropTypes.string,
};
