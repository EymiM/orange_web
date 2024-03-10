/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Camera = ({ className, camera = "/img/camera-4.png" }) => {
  return <img className={`camera ${className}`} alt="Camera" src={camera} />;
};

Camera.propTypes = {
  camera: PropTypes.string,
};
