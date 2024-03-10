/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroupFill = ({
  className,
  overlapGroupClassName,
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  overlapClassName,
  subtractClassName,
  subtract = "/img/subtract-26.png",
  subtractClassNameOverride,
  img = "/img/subtract-25.png",
  rectangleClassName,
  rectangle = "/img/rectangle-4160-9.png",
}) => {
  return (
    <div className={`group-fill ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className={`ellipse ${ellipseClassName}`} />
        <div className={`div ${ellipseClassNameOverride}`} />
        <div className={`ellipse-2 ${divClassName}`} />
      </div>
      <div className={`overlap ${overlapClassName}`}>
        <img className={`subtract ${subtractClassName}`} alt="Subtract" src={subtract} />
        <img className={`img ${subtractClassNameOverride}`} alt="Subtract" src={img} />
        <img className={`rectangle ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
      </div>
    </div>
  );
};

GroupFill.propTypes = {
  subtract: PropTypes.string,
  img: PropTypes.string,
  rectangle: PropTypes.string,
};
