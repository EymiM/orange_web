/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GroupAddLight = ({
  className,
  overlapClassName,
  groupClassName,
  overlapGroupClassName,
  subtractClassName,
  subtract = "/img/subtract-27.png",
  rectangleClassName,
  rectangle = "/img/rectangle-4160-10.png",
  vectorClassName,
  vector = "/img/vector-571-4.png",
  vectorClassNameOverride,
  img = "/img/vector-572-4.png",
}) => {
  return (
    <div className={`group-add-light ${className}`}>
      <div className={`overlap-2 ${overlapClassName}`}>
        <div className={`group ${groupClassName}`}>
          <div className="overlap-3">
            <div className="ellipse-6" />
            <img className="ellipse-7" alt="Ellipse" src="/img/ellipse-47-4.png" />
          </div>
          <div className={`overlap-group-2 ${overlapGroupClassName}`}>
            <img className={`subtract-2 ${subtractClassName}`} alt="Subtract" src={subtract} />
            <img className={`rectangle-2 ${rectangleClassName}`} alt="Rectangle" src={rectangle} />
          </div>
        </div>
        <img className={`vector ${vectorClassName}`} alt="Vector" src={vector} />
        <img className={`vector-2 ${vectorClassNameOverride}`} alt="Vector" src={img} />
      </div>
    </div>
  );
};

GroupAddLight.propTypes = {
  subtract: PropTypes.string,
  rectangle: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
};
