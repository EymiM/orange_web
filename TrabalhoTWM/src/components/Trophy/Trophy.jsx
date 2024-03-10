/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Trophy = ({ className, trophy = "/img/trophy-3.png" }) => {
  return <img className={`trophy ${className}`} alt="Trophy" src={trophy} />;
};

Trophy.propTypes = {
  trophy: PropTypes.string,
};
